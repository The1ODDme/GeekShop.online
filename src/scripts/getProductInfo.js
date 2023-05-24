export const getProductInfo = () => {
  return fetch('http://192.168.2.171:8080/getProductinfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const formattedData = data.map(product => ({
        image: product.image,
        price: product.price,
        name: product.name,
        description: product.description
      }));

      return formattedData;
    })
    .catch(error => {
      console.error('There was an error!', error);
      throw error; // Пробрасывает ошибку дальше для обработки в других частях кода
    });
};
