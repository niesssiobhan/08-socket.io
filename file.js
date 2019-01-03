'use strict';

const fs = require('fs');
const util = require('util');
const events = require('./events.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);
file.saveFile = (file,buffer) => writeFile.apply(file,buffer);

file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUppercase());

file.alterFiler = incomingFile =>
  file.loadFile(incomingFile)
  .then(contents => file.convertBuffer(contents))
  .then(buffer => file.saveFile(incomingFile.buffer))
  .then( () => {events.emit('file-save', incomingFile); return true; })
  .catch(error => events.emit('file-error', error));