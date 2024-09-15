import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Color;
