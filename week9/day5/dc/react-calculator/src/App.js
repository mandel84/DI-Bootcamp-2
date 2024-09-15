import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('add');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);
  const handleOperationChange = (e) => setOperation(e.target.value);

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calcResult;

    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        calcResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        calcResult = 'Invalid operation';
    }

    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
      </div>
      <div className="operation-select">
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
      </div>
      <button onClick={calculateResult}>Calculate</button>
      {result !== null && <h2 className="result">Result: {result}</h2>}
    </div>
  );
}

export default App;
