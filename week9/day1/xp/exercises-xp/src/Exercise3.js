import React, { Component } from 'react';
import './Exercise.css';


const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a styled header</h1>
        <p>This is a paragraph inside the Exercise component.</p>
        <a href="https://www.example.com">This is a link</a>
        <form>
          <input type="text" placeholder="Enter text here" />
          <button type="submit">Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="Example" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
