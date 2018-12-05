var express = require("express");
var app = express();
// const port = "3001";


app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
	res.send("Hi There!");
});

app.listen(3001);

app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});
app.get("/dog", function(req, res){
	res.send("MEEOOOW!!!!");	
});
app.get("/hello/:pattern/bye/:pattern2", function(req, res){
	var pattern = req.params.pattern.toUpperCase();
	var pattern2 = req.params.pattern2.toUpperCase(); 
	res.send("Hello from a pattern route called " + pattern +". And goodbye from " + pattern2 + ".");
});

// app.get("*", (req, res) => res.sendStatus(404));
