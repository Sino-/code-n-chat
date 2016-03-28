var path = require('path');
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();
var config = require('./models/CONFIGS');
var system = require('./models/System.js');

// defining views dir
app.set('views', path.join(__dirname, 'views'));

// defining assets dir
app.use(express.static(path.join(__dirname, 'assets')));

// defining views engine
app.set('view engine', 'jade');



app.get('/', function(req, res) {
	console.log("Client connected...");
	res.render('index', { message: "welcome to code-n-chat"});
	res.send(system());

});

io.on('connection', function(socket){
  console.log('a user connected');
});

// init server
app.listen(config.application.port, function() {
	console.log("Listening on port 1337");
});
