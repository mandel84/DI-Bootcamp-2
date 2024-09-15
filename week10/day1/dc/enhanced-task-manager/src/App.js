import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskManager from './TaskManager';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
