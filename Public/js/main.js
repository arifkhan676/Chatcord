const socket = io();

socket.on('message',message =>{  //here I get it from server
    console.log(message);
})