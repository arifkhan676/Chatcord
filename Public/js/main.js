const chatFrom = document.getElementById("chat-form");
const chatMessage = document.querySelector(".chat-messages");

//Get username from URL & room
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix:true
});

const socket = io();

//join chat room
socket.emit('joinRoom',{username,room});


socket.on('message',message =>{  //here I get it from server to my console log
    console.log(message);
    OutputMessage(message); //this function will show the msg to the index page
    //scroll down when everytime gets msg
    chatMessage.scrollTop = chatMessage.scrollHeight;
})

chatFrom.addEventListener('submit',(e)=>{
    e.preventDefault(); // prevent the default behavior
    //get a msg text
    const msg = e.target.elements.msg.value;
   // emmiting a msg to server
    socket.emit('chatMessage',msg);

    //after passed input should blank
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();

})

//Output message to DOM

function OutputMessage(message){ //this function will show the msg to the index page
   const div = document.createElement('div');
   div.classList.add('message'); //all the classes inside html
   div.innerHTML = `<p class="meta"> ${message.username} <span> ${message.time} </span></p>
   <p class="text">
       ${message.text}
   </p> `;
   document.querySelector(".chat-messages").appendChild(div);

}