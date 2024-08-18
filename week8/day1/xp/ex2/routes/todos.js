const express = require('express');
const router = express.Router();

let todos = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(todos)
});

router.post('/', (req, res) => {
  const newTodo = {
    id: nextId++,
    ...req.body
  };
  todos.push(newTodo);
  res.status(201).json(newTodo)
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = todos.findIndex(todo => todo.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' })
  }

  todos[index] = { id, ...req.body }
  res.json(todos[index]);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  todos = todos.filter(todo => todo.id !== id)
  res.status(204).end();
});

module.exports = router;
