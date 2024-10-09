import React from 'react';

const ComputerScreen = ({ question, winner }) => {
    return (
        <div>
            <h1>Computer Screen</h1>
            {winner && <h2>Congratulations, {winner}!</h2>}
            <h2>{question.question}</h2>
            <ul>
                {Object.entries(question.options).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComputerScreen;
