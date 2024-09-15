import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020
  });

  const changeColor = () => {
    setPhone(prevState => ({
      ...prevState,
      color: 'blue'
    }));
  };

  return (
    <div>
      <h2>Phone Information</h2>
      <p>Brand: {phone.brand}</p>
      <p>Model: {phone.model}</p>
      <p>Color: {phone.color}</p>
      <p>Year: {phone.year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
