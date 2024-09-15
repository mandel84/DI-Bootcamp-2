import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []); 
  const [inputValue, setInputValue] = useState(''); 

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue(''); 
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
        style={{ padding: '10px', fontSize: '1rem' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '10px', marginLeft: '10px', fontSize: '1rem' }}>
        Add Todo
      </button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
