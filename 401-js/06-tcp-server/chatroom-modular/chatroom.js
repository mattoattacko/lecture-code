'use strict';

const requireDir = require('require-dir');
const actions = requireDir(__dirname + '/actions/');

const chatroom = module.exports = {};

chatroom.users = {};

chatroom.connectUser = (socket) => {
    
    // Create a new user and add them to the pool
    socket.username = Math.random();
    chatroom.users[socket.username] = socket;
    
    // Setup our listeners
    socket.on('data', (buffer) => chatroom.handleEntry(buffer, socket) );
    
    socket.on('error', (error) => chatroom.handleError(error, socket) );
    
    socket.on('close', (socket) => chatroom.handleClose(socket) );
    
    // Announce our new arrival
    let text = `Welcome ${socket.username}`;
    chatroom.dispatch("broadcast", socket, text);
    
};

chatroom.handleEntry = (buffer, socket) => {
    
    let text = buffer.toString().trim();
    
    // Split on the first space giving you "command" and everything else
    let regex = /\s+(.*)/;
    
    // By default, just broadcast whatever was typed
    let command = "broadcast";
    let payload = text;
    
    // Detect any /command
    if ( text.startsWith('/') ) {
        // Sniff it out, parse it
        [command, payload] = text.trim().replace('/','').split(regex);
    }
    
    // Run the appropriate command and send it the string of text
    chatroom.dispatch(command, socket, payload);

};

chatroom.dispatch = (command, socket, payload) => {
    // note that invalid commands are silently ignored
    actions[command] && typeof actions[command] === "function" && actions[command](chatroom, socket, payload);
}

chatroom.handleError = (error, socket) => {
    console.log("SOCKET_ERROR", error); 
};

chatroom.handleClose = (socket) => {
    console.log("SOCKET_CLOSED"); 
};