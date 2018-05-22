const events = require('../lib/events.js');
const socketPool = require('../lib/socket-pool.js');

events.on('@dm', (data, userId) => {
  let sender = socketPool[userId].nickname;
  for (let connection in socketPool) {
    let user = socketPool[connection];
    if (user.nickname === data.target) {
      user.socket.write(`   <<<${sender}>>>: ${data.message}\n`);
    }
  }
});

module.exports = {};