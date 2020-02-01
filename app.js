var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const config = require("./config/config.json");
const port = 5000;

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});



http.listen(config.server.port, function(){
  console.log('listening on *:' + config.server.port.toString());
});
