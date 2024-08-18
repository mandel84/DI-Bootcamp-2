const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' }
];

let playerScore = 0;

app.post('/guess', (req, res) => {
    const { guess, emoji } = req.body;
    const selectedEmoji = emojis.find(e => e.emoji === emoji)
    
    if (selectedEmoji && selectedEmoji.name.toLowerCase() === guess.toLowerCase()) {
        playerScore++;
        res.json({ correct: true, score: playerScore })
    } else {
        res.json({ correct: false, score: playerScore })
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
