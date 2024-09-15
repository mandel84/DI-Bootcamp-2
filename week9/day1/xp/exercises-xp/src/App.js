import React from 'react';
import './App.css';

import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};


function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div className="App">
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
{/* ex2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      {/* ex3 */}
      <Exercise />

    </div>
  );
}

export default App;
