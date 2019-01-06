'use strict';

const io = require ('socket.io-client');
const socket = io.connect('http://localhost:3000');

const logError = (payload) => {
  if(payload){
    console.log('there was an erro', payload);
  }
};

const logSuccess = (payload) => {
  if(payload){
    console.log('hopefully something will save', payload); 
  }
};

socket.on('error', logError);
socket.on('save', logSuccess);