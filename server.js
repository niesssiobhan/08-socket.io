'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('connected', socket.id);
  socket.on('speak', (payload) => {
    console.log('.');
    socket.broadcast.emit('message', payload);
  });
});