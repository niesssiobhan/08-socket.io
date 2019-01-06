'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('New connection', socket.id);

  socket.on('file', (file) => {
    console.log(file);
    socket.broadcast.emit('read', file);
  });

  socket.on('file-saved', (payload) => {
    console.log('the file was saved');
    socket.broadcast.emit('saved', payload);
  });

  socket.on('file-error', (payload) => {
    console.error('there was an error');
    socket.broadcast.emit('error', payload);
  });

});