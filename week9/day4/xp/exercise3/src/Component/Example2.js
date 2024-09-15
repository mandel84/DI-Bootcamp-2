import React, { Component } from 'react';

class Example2 extends Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ skills: data.Skills }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        {this.state.skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.Area}</h3>
            <ul>
              {skill.SkillSet.map((item, i) => (
                <li key={i}>
                  {item.Name} {item.Hot ? '(Hot)' : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
