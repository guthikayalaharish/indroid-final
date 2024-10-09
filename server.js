// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast incoming messages to all connected clients
    const parsedMessage = JSON.parse(message); // Parse the incoming JSON message

    // Assuming you want to broadcast the correct answers only
    if (parsedMessage.type === 'correctAnswer') {
      const responseMessage = JSON.stringify({
        type: 'correctAnswer',
        name: parsedMessage.name,
      });

      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(responseMessage); // Send the correctly formatted message
        }
      });
    }
  });
});

console.log('WebSocket server is running on ws://192.168.1.6:8080');
