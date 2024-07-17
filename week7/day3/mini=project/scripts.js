document.addEventListener("DOMContentLoaded", function() {
    const characterName = document.getElementById('character-name');
    const characterHeight = document.getElementById('character-height');
    const characterGender = document.getElementById('character-gender');
    const characterBirthYear = document.getElementById('character-birth-year');
    const characterHomeWorld = document.getElementById('character-home-world');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const fetchButton = document.getElementById('fetch-button');

    fetchButton.addEventListener('click', function() {
        fetchCharacter();
    });

    function fetchCharacter() {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const apiUrl = `https://www.swapi.tech/api/people/${randomId}`;
        
        loading.style.display = 'block';
        error.style.display = 'none';
        clearCharacterInfo();

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayCharacterInfo(data.result);
                return fetch(data.result.properties.homeworld);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(homeworldData => {
                characterHomeWorld.textContent = `Home World: ${homeworldData.result.properties.name}`;
                loading.style.display = 'none';
            })
            .catch(err => {
                loading.style.display = 'none';
                error.style.display = 'block';
                console.error('Fetch error:', err);
            });
    }

    function clearCharacterInfo() {
        characterName.textContent = '';
        characterHeight.textContent = '';
        characterGender.textContent = '';
        characterBirthYear.textContent = '';
        characterHomeWorld.textContent = '';
    }

    function displayCharacterInfo(character) {
        characterName.textContent = character.properties.name;
        characterHeight.textContent = `Height: ${character.properties.height}`;
        characterGender.textContent = `Gender: ${character.properties.gender}`;
        characterBirthYear.textContent = `Birth Year: ${character.properties.birth_year}`;
    }
});
