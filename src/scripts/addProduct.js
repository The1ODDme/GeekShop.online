fetch('http//192.168.2.171:8080/createUser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name:'Funko PoP Batman',
    description: 'Funko Pop Batman is a collectible vinyl figurine that captures the essence of the iconic superhero from the DC Comics universe.',
    price: '19.99',
    image: '',
    category_id: '1',
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