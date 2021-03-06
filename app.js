//Networking
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//Config
const config = require("./config/config.json");
const port = 5000;

//IO
const Log = require("./io/Log").Log;

//Session
const Session = require("./networking/Session").Session;
var session = new Session();


io.on('connection', (socket) => {
	Log("a client connected to the socket");
	session.addClient(socket);

	socket.on('disconnect', () => {
		Log("a client disconnected to the socket");
		session.removeClient(socket.id);
	});
});

http.listen(config.server.port, function(){
	Log('listening on *:' + config.server.port.toString());
});
