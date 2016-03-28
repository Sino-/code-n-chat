var path = require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));



app.get('/', function(req, res) {
	console.log("Client connected...");
	res.send('Hello World');
});


app.get('/name/:name', function(req, res) {
	console.log("Name Endpoint accessed...");
	res.send('My name is '+ req.params.name +' '+ req.query.lastname);
});


app.listen(1337, app_init);

function app_init() {
	console.log("Listening on port 1337");
}