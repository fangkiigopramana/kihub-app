import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);

  return (
    <button
      className={`focus:outline-none ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } text-gray-900 hover:bg-gray-900 hover:text-white py-2 px-4 rounded`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;