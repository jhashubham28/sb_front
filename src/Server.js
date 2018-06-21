var express=require('express');
var app=express();

app.use(express.static("dailynews"));

app.get('/',function(req, res){
	res.redirect('/');
});
app.listen(8080,'localhost');
console.log("My app is listening on 8080");
