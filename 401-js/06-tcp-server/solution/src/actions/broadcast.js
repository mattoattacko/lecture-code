const events = require('../lib/events.js');
const socketPool = require('../lib/socket-pool.js');

events.on('@all', (data, userId) => {
  let sender = socketPool[userId].nickname;
  for (let connection in socketPool) {
    let user = socketPool[connection];
    user.socket.write(`<${sender}>: ${data.payload}\n`);
  }
});

module.exports = {};