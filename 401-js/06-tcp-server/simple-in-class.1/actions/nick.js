const chatroom = require('../chatroom.js');

chatroom.events.on("@nick", (data, userId) => {
  console.log("Nick Change");
  chatroom.socketPool[userId].nickname = data.payload;
});
