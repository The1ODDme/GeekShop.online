fetch('http://192.168.2.171:8080/getUserInfo', {
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
    firstname: product.firstname,
    lastname: product.lastname,
    email: product.email,
    address: product.address
  }));

  console.log(formattedData);
})
.catch(error => {
  console.error('There was an error!', error);
});

