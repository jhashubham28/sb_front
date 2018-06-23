

var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port

app.use(express.static("src"));

app.get('/',function(req, res){
res.redirect('/');
});
app.listen(port);
console.log("App listening on port " + port);
