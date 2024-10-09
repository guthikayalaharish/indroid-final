// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodeDisplay from './components/QRCodeDisplay';
import PlayerNameInput from './components/PlayerNameInput';
import QuestionDisplay from './components/QuestionDisplay';

const App = () => {
  const [playerName, setPlayerName] = useState('');
  const [isPlayerJoined, setIsPlayerJoined] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [congratulationMessage, setCongratulationMessage] = useState('');
  const [ws, setWs] = useState(null);

  const questions = [
    {
      question: "What is the capital of Telangana?",
      options: ["A: Hyderabad", "B: Amaravathi", "C: Bangalore", "D: mumbai"],
      answer: "A"
    },
    {
      question: "Who is the current president of India?",
      options: ["A: Narendra Modi", "B: Draupadhi Murmu", "C: Ramnath  Kovind", "D: Venkaiah naidu"],
      answer: "B"
    },
    {
      question: ".py is extension for?",
      options: ["A: flutter", "B: java", "C: php", "D: python"],
      answer: "D"
    },
    {
      question: "Which the full form of ai?",
      options: ["A: artificial innovation", "B: Artificial intelligence", "C:astroid invision", "D:Anti intelligence"],
      answer: "B"
    },
    {
      question: "What is 9+ 7?",
      options: ["A: 21", "B: 16", "C: 18", "D: 19"],
      answer: "B"
    }
  ];

  useEffect(() => {
    const websocket = new WebSocket('ws://192.168.1.6:8080'); // Ensure this IP is correct
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'correctAnswer') {
        setCongratulationMessage(`Congratulations, ${data.name}! You answered correctly.`);
        setCurrentQuestionIndex((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
      }
    };
    setWs(websocket);
    return () => websocket.close();
  }, []);

  const handleCorrectAnswer = (name) => {
    if (ws) {
      const message = JSON.stringify({ type: 'correctAnswer', name });
      ws.send(message); // Send correctly formatted message
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/mobile"
          element={
            isPlayerJoined ? (
              <QuestionDisplay
                questions={questions}
                playerName={playerName}
                currentQuestionIndex={currentQuestionIndex}
                onCorrectAnswer={handleCorrectAnswer} // Pass the handler
              />
            ) : (
              <PlayerNameInput onNameSubmit={(name) => { setPlayerName(name); setIsPlayerJoined(true); }} />
            )
          }
        />
        <Route path="/" element={<QRCodeDisplay />} />
      </Routes>
      {/* Displaying the congratulatory message only on the computer screen */}
      {congratulationMessage && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center', color: 'green', fontSize: '20px' }}>
          {congratulationMessage}
        </div>
      )}
    </Router>
  );
};

export default App;
