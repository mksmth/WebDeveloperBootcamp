var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.listen(3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var friends = ["Billy", "Bunter", "Jeeves", "Bertie", "Wooster"];

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/friends", function(req,res) {
  res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("friends");
})
