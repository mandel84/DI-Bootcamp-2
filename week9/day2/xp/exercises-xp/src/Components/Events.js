import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br /><br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type something and press Enter" />
      <br /><br />
      <button onClick={toggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
