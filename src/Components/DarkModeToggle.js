import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // You can add your own logic here to switch your application's theme or apply CSS classes for dark mode.

    // Change the background color of the whole screen to deep blue when in dark mode
    if (isDarkMode) {
      document.body.style.backgroundColor = '#c5beaa';
    } else {
      document.body.style.backgroundColor = '#fedccc'; // Change it back to the default background color
    }
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        style={{ backgroundColor: isDarkMode ? 'skyblue' : 'teal', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px' }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
