const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random';
const gifForm = document.getElementById('gif-form');
const gifCategoryInput = document.getElementById('gif-category');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all');

gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = gifCategoryInput.value.trim();
    if (category) {
        try {
            await fetchGif(category);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    }
});

async function fetchGif(category) {
    const url = `${BASE_URL}?tag=${category}&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data && data.data) {
        appendGifToDOM(data.data);
    }
}

function appendGifToDOM(gifData) {
    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';

    const gifImg = document.createElement('img');
    gifImg.src = gifData.images.fixed_height.url;
    gifImg.alt = gifData.title;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        gifItem.remove();
    });

    gifItem.appendChild(gifImg);
    gifItem.appendChild(deleteButton);
    gifContainer.appendChild(gifItem);
}

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});
