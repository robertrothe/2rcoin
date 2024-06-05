const express = require('express');
const { WebSocketServer } = require('ws');
const http = require('http');
const path = require('path');

const app = express();
const port = process.argv[2] || 3001;

// Serve static files from the directory where this script is located
app.use(express.static(path.join(__dirname)));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let sockets = [];

wss.on('connection', function connection(ws) {
    sockets.push(ws);

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // Broadcast the message to all other connected clients
        sockets.forEach(s => {
            if (s !== ws) {
                s.send(message);
            }
        });
    });

    ws.on('close', function close() {
        // Remove the socket from the array when it is closed
        sockets = sockets.filter(s => s !== ws);
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
