const chatroom = require('./chatroom.js');

chatroom.events.on('@nick', (data) => {
  console.log("Nicking out on", data);
  console.log('Socket Pool:', chatroom.socketPool);
});
