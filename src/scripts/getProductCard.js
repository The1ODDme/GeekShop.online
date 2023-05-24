fetch('http://192.168.2.171:8080/getProductCard', {
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
  // Формируем новый массив объектов, содержащий только нужные поля
  const formattedData = data.map(product => ({
    image: product.image,
    price: product.price,
    name: product.name
  }));

  console.log(formattedData);
})
.catch(error => {
  console.error('There was an error!', error);
});

