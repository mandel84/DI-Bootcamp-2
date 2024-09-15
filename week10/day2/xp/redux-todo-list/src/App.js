import React from 'react';
import DatePicker from './DatePicker';
import TaskList from './TaskList';
import TaskManager from './TaskManager';

function App() {
  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <DatePicker />
      <TaskList />
      <TaskManager />
    </div>
  );
}

export default App;
