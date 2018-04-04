// Change handle
//  /nick <new handle> 

module.exports = (chatroom, socket, payload) => {
    
    let oldName = socket.username;
    delete chatroom.users[socket.username];
    
    socket.username = payload;
    chatroom.users[payload] = socket;
    
    let text = `${oldName} is now known as ${payload}`;
    
    chatroom.dispatch('broadcast', socket, text);
    
};
