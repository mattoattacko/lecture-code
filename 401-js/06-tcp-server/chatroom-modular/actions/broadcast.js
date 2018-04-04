
module.exports = (chatroom, socket, payload) => {
    
    for(let user in chatroom.users) {
        if ( user !== socket.username ) { 
            chatroom.users[user].write( `[${socket.username}] ${payload}\n> ` );
        }
    };

};
