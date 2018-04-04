// Direct Message a specific user
// /dm <user>

module.exports = (chatroom, socket, payload) => {
    
    // get the username and the message split out
    let regex = /\s+(.*)/;
    let [user, message] = payload.split(regex);
    let text = `    [DM:${socket.username}] ${message}\n> `;
    typeof chatroom.users[user] === "object" && chatroom.users[user].write(text);
    
};
