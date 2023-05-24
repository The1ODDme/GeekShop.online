fetch('http//192.168.2.171:8080/createUser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstname: 'John', 
    lastname: 'Doe',
    email: 'johndoe@example.com',
    passward: 'admin',
    address: 'Sompa'
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was an error!', error);
});
