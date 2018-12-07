var express = require("express");
var app = express();
app.listen(3000);

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/everfalleninlovewith/:someone", function(req,res) {
  var someone = req.params.someone;
  res.render("love.ejs");
});

