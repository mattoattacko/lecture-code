'use strict';

const net = require("net");
const port = 8082;
const server = net.createServer();

let socketPool = {};

// "on" is the equivalent of addEventListener on the server side.
// The callback -- we get a socket.  What's a socket?  An individual connection
// IP: Building, Port: Apartment Number, Socket: Cubicle
server.on('connection', (socket) => {

    socket.username = `User ${Math.random()}`;

    socketPool[socket.username] = socket;
    
    socket.on("data", (buffer) => {

        // Split on the first space giving you "command" and everything else
        let regex = /\s+(.*)/;
        
        // Whatever the user typed in
        let text = buffer.toString().trim();
        
        // Default to just text with not commands
        let command = undefined;
        let payload = undefined;
        
        // Sniff it out, parse it
        if ( text.startsWith('/') ) {
            [command, payload] = text.trim().replace('/','').split(regex);
        }
        
        // Act on any commands we got
        
        // Change handle
        //  /nick <new handle> 
        if ( command === "nick")  {
            let oldName = socket.username;
            delete socketPool[socket.username];
            socket.username = payload;
            socketPool[payload] = socket;
            text = `${oldName} is now known as ${payload}`;
        }

        // Direct Message a specific user
        // /dm <user>
        if ( command === "dm"){
            // get the username
            let [user, message] = payload.split(regex);
            typeof socketPool[user] === "object" && socketPool[user].write(`   [DM:${socket.username}] ${message}`);
            return;
        }
        
        // Kick a user off
        // /kick <user>
        if ( command === "kick"){
            socketPool[payload].destroy();
            delete socketPool[payload];
            text = `${payload} has been kicked out of the chatroom by ${socket.username}`;
        }        

        // Outta Here!
        if ( command === "quit") {
            socketPool[socket.username].destroy();
            delete socketPool[socket.username];
            text = `${socket.username} has left the chatroom`;
        }

        // Broadcast the message (text)
        for(let user in socketPool) {
            if ( user !== socket.username ) { 
                socketPool[user].write( `${socket.username} says: ${text}\n> ` );
            }
        };

    });
    

    socket.on('error', (err,data) => {
        console.log("ERROR", err.message);
    });
    
    socket.on('close', (err,data) => {
        console.log("SOCKET CLOSE", data);
    });
    
    socket.on('destroy', (err,data) => {
        console.log("SOCKET DESTROYED", data);
    });


});

server.listen(port, ()=>{
    console.log("Listening on", process.env.IP, port);
});
