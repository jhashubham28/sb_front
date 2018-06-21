
var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port

app.listen(port);
console.log("App listening on port " + port);
