import React from 'react';
import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Components/ColorClass';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <Color />

    </div>
  );
}

export default App;
