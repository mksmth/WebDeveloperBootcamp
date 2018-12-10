var express = require("express");
var app = express();
app.listen(3000);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/everfalleninlovewith/:someone", function(req,res) {
  var someone = req.params.someone;
  res.render("love", {someoneVar: someone});
});

app.get("/posts", function(req, res){
  var posts = [
  {title: "Post 1", author: "Susy"},
  {title: "Jeeves and Wooster", author: "Bunter"},
  {title: "Can you believe this Alfie?", author: "Mike"},
  {title: "C'mon Everybody", author: "Eddie Cochran"},
  {title: "Watership Down", author: "Richard Adams"}
  ]
});

