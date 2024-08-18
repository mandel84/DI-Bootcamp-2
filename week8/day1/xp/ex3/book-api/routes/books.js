const express = require('express')
const router = express.Router()

let books = []

router.get('/books', (req, res) => {
    res.json(books)
});

router.post('/books', (req, res) => {
    const book = req.body
    books.push(book)
    res.status(201).json(book)
});

router.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedBook = req.body
    books = books.map(book => book.id === id ? updatedBook : book)
    res.json(updatedBook)
});

router.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    books = books.filter(book => book.id !== id)
    res.status(204).send()
});

module.exports = router;
