import React, { useState, useEffect } from 'react';
import quotes from './quotes'; 

function App() {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#3E4C59');
  const [quoteColor, setQuoteColor] = useState('#373F51');
  const [buttonColor, setButtonColor] = useState('#373F51');

  useEffect(() => {
    generateNewQuote(); 
  }, []);

  const getRandomColor = () => {
    const colors = ['#3E4C59', '#FF5733', '#4285F4', '#F4B400', '#34A853', '#FF33A2'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const generateNewQuote = () => {
    let randomIndex;
    let newQuote;

    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    } while (newQuote.quote === quote.quote);

    setQuote(newQuote);
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: quoteColor, fontSize: '24px' }}>"{quote.quote}"</h2>
        <p style={{ fontStyle: 'italic', color: '#555' }}>- {quote.author ? quote.author : "Unknown"}</p>
        <button
          onClick={generateNewQuote}
          style={{
            backgroundColor: buttonColor,
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '16px'
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
