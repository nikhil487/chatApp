const express = require('express');
const app = express();
const socket = require("socket.io");
app.use(express.static("public"));

const server = app.listen(3000,function(){
  console.log("hello i am listening to 4000");
});
const upgradeserver = socket(server);

upgradeserver.on("connection",function(socket)
{
  socket.on("sendingMessage",function(data)
  {
    upgradeserver.emit("recieve",data);
  })
  console.log("my upgradedserver is " + socket.id);
})