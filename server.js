const path = require ('path'); //path helps to access our public folder to the server
const http = require('http');
const express = require('express');
const socketio=require('socket.io');
const formateMessage = require('./ultis/messages');

const app = express();
const server = http.createServer(app); //passing app to the server
const io=socketio(server); 

const botName = 'ChatcordBot';
//Set static folder 
app.use(express.static(path.join(__dirname,'public'))); //it access our public folder to the server

//Run when a client connects 

io.on('connection',socket => {
    socket.emit('message',formateMessage(botName,'Welcome to Chatcord !')); // socket emit message ta client side theke server e pathay & its for single user
    //console.log('New WS Connection...'); check the server

  socket.broadcast.emit('message',formateMessage(botName,'A user has joined')); // broadcast when a user connect & use for all of the clients
  //when client disconnect
  socket.on('disconnect',()=>{
    io.emit('message',formateMessage(botName,'A user has left from chat')); // io.emit will known everyone that user has left
  });
  //listen for chatMessage from client side
  socket.on('chatMessage', msg => {
    io.emit('message',formateMessage('User',msg)); // io.emit listen for everyone
  });
})

const PORT = 3000 || process.env.PORT; // use 3000 or port local environment

server.listen(PORT,()=> // 
   console.log(`Server running on port ${PORT}`)   /// These are for server running
);