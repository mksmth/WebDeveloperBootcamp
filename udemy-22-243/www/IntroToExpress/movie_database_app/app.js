var express = require("express");
var app = express();
var request = require("request");

app.listen(3000);

app.set("view engine", "ejs");
app.get("/favicon.ico", (req, res) => res.sendStatus(204));


app.get("/", function(req, res){
  res.send("home");
});

app.get("/results", function(req,res) {
  request("http://www.omdbapi.com/?s=Glasgow&apikey=thewdb", function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        if(!error && response.statusCode === 200){
    var results = JSON.parse(body);
    res.send(results["Search"][0]["Title"]);
  }
});
});
