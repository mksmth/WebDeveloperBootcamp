var express = require("express");
var app = express();
app.listen(3000);

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  if(animal === "pig"){
    var sound = "'Oink'";
  } else if(animal === "cow"){
    var sound = "'Moo'";
  } else if(animal === "dog"){
    var sound = "'Woof, Woof!'";
  } else {
    var sound = "'Hello!!'";
  }
  res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:greeting/:num", function(req, res){
  var greeting = req.params.greeting + " ";
  var num = req.params.num;
  res.send(greeting.repeat(num));
});

app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});