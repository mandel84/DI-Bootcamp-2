import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      inputValue: '',
      responseMessage: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5012/api/hello');
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5012/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: this.state.inputValue })
      });
      const data = await response.json();
      this.setState({ responseMessage: data.message });
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
