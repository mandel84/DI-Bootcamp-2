import React, { useState, useRef } from 'react';
import { useTasks } from './TaskContext';

const TaskManager = () => {
  const { state, dispatch } = useTasks();
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const editInputRef = useRef(null);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }
  };

  const handleToggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setTimeout(() => {
      editInputRef.current.value = text; 
      editInputRef.current.focus();
    }, 0);
  };

  const handleSaveTask = (id) => {
    const updatedText = editInputRef.current.value;
    if (updatedText.trim()) {
      dispatch({ type: 'EDIT_TASK', payload: { id, text: updatedText } });
      setEditTaskId(null);
    }
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const handleFilterTasks = (filter) => {
    dispatch({ type: 'FILTER_TASKS', payload: filter });
  };

  const filteredTasks = () => {
    switch (state.filter) {
      case 'completed':
        return state.tasks.filter(task => task.completed);
      case 'active':
        return state.tasks.filter(task => !task.completed);
      default:
        return state.tasks;
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          style={{ padding: '10px', fontSize: '1rem', width: '300px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '10px', marginLeft: '10px' }}>
          Add Task
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleFilterTasks('all')}>Show All</button>
        <button onClick={() => handleFilterTasks('completed')} style={{ marginLeft: '10px' }}>
          Show Completed
        </button>
        <button onClick={() => handleFilterTasks('active')} style={{ marginLeft: '10px' }}>
          Show Active
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {filteredTasks().map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {editTaskId === task.id ? (
              <>
                <input type="text" ref={editInputRef} style={{ padding: '5px', fontSize: '1rem' }} />
                <button onClick={() => handleSaveTask(task.id)} style={{ marginLeft: '10px' }}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleToggleTask(task.id)}
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {task.text}
                </span>
                <button onClick={() => handleEditTask(task.id, task.text)} style={{ marginLeft: '10px' }}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
