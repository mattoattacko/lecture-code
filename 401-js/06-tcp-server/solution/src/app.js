'use strict';

// 1st Party Modules
const net = require('net');

// 3rd party libraries
const requireDir = require('require-dir');

// Internal Libraries
const events = require('./lib/events.js');
const User = require('./models/user.js');
const socketPool = require('./lib/socket-pool.js');

// Require in separate event modules that will share the exported eventing objects
requireDir( `${__dirname}/actions/`);

const port = 8081;
const server = net.createServer();

server.on('connection', (socket) => {

  let user = new User(socket);
  socketPool[user.id] = user;

  socket.on('data', (buffer) => dispatchAction(user.id, buffer));

});

let dispatchAction = (userId, buffer) => {
  let entry = parseEntry(buffer);
  entry && events.emit(entry.command, entry, userId);
};

let parseEntry = (buffer) => {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) { return null; }
  let [command, payload] = text.split(/\s+(.*)/);
  let [target, message] = payload && payload.split(/\s(.*)/);
  return { command, target, message, payload };
};

let startServer = () => {
  server.listen(port, () => {
    console.log('Alive on port', port);
  });
};

module.exports = exports = { startServer };

