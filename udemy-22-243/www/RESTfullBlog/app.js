var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// APP CONFIG
app.listen(3000);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/restful_blog", {useNewUrlParser: true});

// MONGOOSE CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create(
  {
    title: "My first blog post",
    image: "https://images.unsplash.com/photo-1470425056423-3e7d20e2fd50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    body: "Here's some blether about a picture of a terrier."

  }, function(err, blog){
    if(err){
      console.log(err);
    } else {
      console.log("NEW BLOGPOST!!:");
      console.log(blog);
      }
  });


// RESTFULL ROUTES

app.get("/", function(req, res){
  res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
  // Get all blogs from db
	Blog.find({}, function(err, blogs){
      if(err){
          console.log(err);
      } else {
          res.render("index", {blogs:blogs});
      }
    });
  });