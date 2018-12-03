var express = require("express");
var app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
	res.send("Hi There!");
});

app.listen(3000);

app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});
app.get("/dog", function(req, res){
	res.send("MEEOOOW!!!!");	
});

app.get("*", (req, res) => res.sendStatus(404));
