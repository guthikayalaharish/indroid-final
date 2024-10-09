import React, { useState } from 'react';

const MobileScreen = ({ question, onAnswerSubmission }) => {
    const [name, setName] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleJoin = () => {
        onAnswerSubmission(name, selectedAnswer);
        setName('');
    };

    const handleSubmitAnswer = () => {
        onAnswerSubmission(name, selectedAnswer);
        setSelectedAnswer('');
    };

    return (
        <div>
            <h1>Mobile Screen</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
            />
            <button onClick={handleJoin}>Join Game</button>
            <h2>{question.question}</h2>
            <input 
                type="radio" 
                value="A" 
                checked={selectedAnswer === 'A'} 
                onChange={(e) => setSelectedAnswer(e.target.value)} 
            /> A
            <input 
                type="radio" 
                value="B" 
                checked={selectedAnswer === 'B'} 
                onChange={(e) => setSelectedAnswer(e.target.value)} 
            /> B
            <input 
                type="radio" 
                value="C" 
                checked={selectedAnswer === 'C'} 
                onChange={(e) => setSelectedAnswer(e.target.value)} 
            /> C
            <input 
                type="radio" 
                value="D" 
                checked={selectedAnswer === 'D'} 
                onChange={(e) => setSelectedAnswer(e.target.value)} 
            /> D
            <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
    );
};

export default MobileScreen;
