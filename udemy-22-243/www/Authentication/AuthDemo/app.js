var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// mongoose.connect("mongodb://localhost/yelpcamp_v5", {useNewUrlParser: true});

app.listen(3000);
console.log("Server Started on port 3000");

app.get("/", function(req, res){
	res.reder("home");
});
