import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      textAlign: 'center',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={theme === 'light' ? styles.light : styles.dark}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <p>This is the main content of the page.</p>
    </div>
  );
};

export default MainContent;
