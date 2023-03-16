const path = require ('path'); //path helps to access our public folder to the server
const http = require('http');
const express = require('express');
const socketio=require('socket.io');

const app = express();
const server = http.createServer(app);
const io=socketio(server);
//Set static folder 

app.use(express.static(path.join(__dirname,'public'))); //it access our public folder to the server

//Run when a client connects 
io.on('connection',socket => {
    console.log('New WS Connection...');
})

const PORT = 3000 || process.env.PORT; // use 3000 or port local environment

server.listen(PORT,()=> // 
   console.log(`Server running on port ${PORT}`)   /// These are for server running
);