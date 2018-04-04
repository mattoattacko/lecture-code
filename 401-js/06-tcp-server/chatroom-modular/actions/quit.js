// Quit the chatroom

module.exports = (chatroom, socket, payload) => {
    
    let user = socket.username;
    chatroom.users[user].destroy();
    delete chatroom.users[user];
    let text = `${socket.username} has left the chatroom`;
    chatroom.dispatch("broadcast", socket, text);
    
};
