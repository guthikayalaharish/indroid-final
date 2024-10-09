// src/components/QuestionDisplay.js
import React, { useState } from 'react';

const QuestionDisplay = ({ questions, playerName, currentQuestionIndex, onCorrectAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSubmit = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      onCorrectAnswer(playerName); // Notify App.js about the correct answer
      setSelectedAnswer(''); // Clear the selection
    } else {
      alert(`Sorry, ${playerName}. That's incorrect.`);
    }
  };

  if (currentQuestionIndex >= questions.length) {
    return <h2>Game Over! Thank you for playing!</h2>;
  }

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option[0]} // Gets the first character (A, B, C, D)
            checked={selectedAnswer === option[0]}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
    </div>
  );
};

export default QuestionDisplay;
