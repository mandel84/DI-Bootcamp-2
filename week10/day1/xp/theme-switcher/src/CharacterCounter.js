import React, { useRef, useState } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null); 
  const [charCount, setCharCount] = useState(0); 

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length; 
    setCharCount(textLength); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Character Counter</h1>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInputChange} 
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '1rem', width: '300px' }}
      />
      <p>Character count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter;
