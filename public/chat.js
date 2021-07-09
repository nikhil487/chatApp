const socket = io.connect("/");

var message = document.getElementById('message');
var username = document.getElementById('username');
var button  = document.getElementById('send');
var output = document.getElementById('output');

button.addEventListener("click",function()
{
    socket.emit("sendingMessage",{
        message : message.value,
        username : username.value
    });
});

socket.on("recieve",(data)=>{
    output.innerHTML += "<p><strong>" + data.username + "</strong>" + ":" + data.message + "</p>";
})