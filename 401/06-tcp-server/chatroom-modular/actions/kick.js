// Kick a user off
// /kick <user>

module.exports = (chatroom, socket, payload) => {
    chatroom.users[payload].destroy();
    delete chatroom.users[payload];
    let text = `${payload} has been kicked out of the chatroom by ${socket.username}`;
    chatroom.dispatch("broadcast", socket, text);
};
