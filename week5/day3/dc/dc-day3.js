const planets = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'yellow', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
    { name: 'Mars', color: 'red', moons: 2 },
    { name: 'Jupiter', color: 'orange', moons: 79 },
    { name: 'Saturn', color: 'goldenrod', moons: 82 },
    { name: 'Uranus', color: 'lightblue', moons: 27 },
    { name: 'Neptune', color: 'darkblue', moons: 14 }
];

const listPlanetsSection = document.querySelector('.listPlanets');
function getRandomPosition(radius) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius + radius;
    return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
    };
}

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        const position = getRandomPosition(50);
        moonDiv.style.left = `${position.x}px`;
        moonDiv.style.top = `${position.y}px`;
        planetDiv.appendChild(moonDiv);
    }
    listPlanetsSection.appendChild(planetDiv);
});
