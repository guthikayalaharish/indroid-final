// src/components/PlayerNameInput.js
import React, { useState } from 'react';

const PlayerNameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onNameSubmit(name);
    }
  };

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default PlayerNameInput;
