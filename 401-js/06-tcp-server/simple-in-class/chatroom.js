'use strict';

const EventEmitter = require('events');
const net = require('net');

const port = 8082;
const server = net.createServer();
const events = new EventEmitter();
const socketPool = {};

let User = function(socket) {
  this.id = Math.random();
  this.nickname = `User-${this.id}`;
  this.socket = socket;
};

let parseEntry = (buffer) => {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) { return null; }
  let [command, payload] = text.split(/\s+(.*)/);
  let [target, message] = payload && payload.split(/\s(.*)/);
  return { command, target, message, payload };
}

server.on('connection', (socket) => {

  let user = new User(socket);
  socketPool[user.id] = user;

  socket.on('data', (buffer) => dispatchAction(user.id, buffer));

});

let dispatchAction = (userId, buffer) => {
  let entry = parseEntry(buffer);
  entry && events.emit(entry.command, entry, userId);
}

events.on("@all", (data, userId) => {
  for (let connection in socketPool) {
    let user = socketPool[connection];
    user.socket.write(`<${user.nickname}>: ${data.payload}\n`);
  };
});

events.on("@dm", (data, userId) => {
  for (let connection in socketPool) {
    let user = socketPool[connection];
    if (user.nickname === data.target) {
      user.socket.write(`   <<<${user.nickname}>>>: ${data.message}\n`);
    }
  };
});

events.on("@nick", (data, userId) => {
  socketPool[userId].nickname = data.payload;
});

server.listen(port, () => {
  console.log('Alive on port', port);
});
