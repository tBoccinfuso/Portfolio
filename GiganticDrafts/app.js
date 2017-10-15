'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 1245;
const INDEX = path.join(__dirname, '/public/giganticdrafts.html');



const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.use(express.static('public'))

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
