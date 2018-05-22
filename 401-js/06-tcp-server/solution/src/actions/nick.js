const events = require('../lib/events.js');
const socketPool = require('../lib/socket-pool.js');

events.on('@nick', (data, userId) => {
  socketPool[userId].nickname = data.payload;
  socketPool[userId].socket.write(`You are now known as ${data.payload}\n`);
});

module.exports = {};
