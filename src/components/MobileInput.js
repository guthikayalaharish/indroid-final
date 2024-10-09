// src/components/MobileInput.js
import React, { useState } from 'react';

const MobileInput = ({ setPlayerName }) => {
  const [name, setName] = useState('');

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setPlayerName(name); // Pass the player name to the main app
  };

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <form onSubmit={handleNameSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
};

export default MobileInput;
