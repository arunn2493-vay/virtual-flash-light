// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Endpoint to trigger the flash
app.get('/trigger-flash', (req, res) => {
    // Emit socket event to all connected clients
    io.emit('flash-trigger');
    res.send({ status: 'Flash triggered' });
});

http.listen(port, () => {
    console.log(`Server running at ${port}`);
});
