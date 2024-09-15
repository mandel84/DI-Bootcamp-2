import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { experiences: [] };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ experiences: data.Experiences }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.state.experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.companyName}</h3>
            <img src={exp.logo} alt={exp.companyName} width="100" />
            <a href={exp.url} target="_blank" rel="noreferrer">
              {exp.url}
            </a>
            {exp.roles.map((role, i) => (
              <div key={i}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>{role.location}</p>
                <p>
                  {role.startDate} - {role.endDate}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
