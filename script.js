fetch('seagules.json')
.then(response => response.json())
.then(data => {
  const destinationGrid = document.querySelector('.destination-grid');
  data.forEach(destination => {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('destination-card');
    destinationCard.innerHTML = `
      <h3>${destination.destination}</h3>
      <p>${destination.description}</p>
      <a href="#">Learn More</a>
    `;
    destinationGrid.appendChild(destinationCard);
  });
})
.catch(error => console.error(error));