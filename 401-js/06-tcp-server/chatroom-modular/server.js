'use strict';

const net = require("net");
const port = 8082;
const chatroom = require("./chatroom");

const server = net.createServer();

server.on('connection', (socket) => chatroom.connectUser(socket) );

server.listen(port, ()=>{
    console.log("Listening on", process.env.IP, port);
});