// List of emoji objects
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
];

// Function to display a random emoji
function displayRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    // Set the emoji in the HTML
    const emojiElement = document.querySelector('#emoji');
    emojiElement.textContent = randomEmoji.emoji;

    // Store the correct name in a data attribute for checking later
    emojiElement.dataset.name = randomEmoji.name;
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    displayRandomEmoji();

    document.querySelector('#emoji-form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const emojiElement = document.querySelector('#emoji');
        const guess = document.querySelector('#guess').value.trim().toLowerCase();
        const correctName = emojiElement.dataset.name.toLowerCase();

        try {
            const response = await fetch('http://localhost:3000/guess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ guess, emoji: emojiElement.textContent })
            });

            const data = await response.json();

            if (guess === correctName) {
                alert(`Correct! Your score is now ${data.score}.`);
            } else {
                alert(`Incorrect. Your score is ${data.score}.`);
            }

            // Display a new random emoji for the next round
            displayRandomEmoji();
            document.querySelector('#guess').value = ''; // Clear the input field
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
