import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to handle the vote
  const addVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
          <div style={{ width: "50px" }}>{language.votes}</div>
          <div style={{ width: "100px" }}>{language.name}</div>
          <button onClick={() => addVote(index)} style={{ marginLeft: "auto", color: "green" }}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
