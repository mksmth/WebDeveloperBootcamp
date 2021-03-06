var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");

// APP CONFIG
app.listen(3000);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/restful_blog", {useNewUrlParser: true});


// MONGOOSE CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create(
//   {
//     title: "My first blog post",
//     image: "https://images.unsplash.com/photo-1470425056423-3e7d20e2fd50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     body: "Here's some blether about a picture of a terrier."

//   }, function(err, blog){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEW BLOGPOST!!:");
//       console.log(blog);
//       }
//   });


// RESTFULL ROUTES

app.get("/", function(req, res){
  res.redirect("/blogs");
});

//INDEX: displays all blogs in listing
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


// NEW: displays form to add new blog to DB
app.get("/blogs/new", function(req, res){
  res.render("new");
});

//CREATE: DOESN'T WORK

// app.post("/blogs", function(req, res){
//   // create blog
//   Blog.create(req.body.blog, function(err, newBlog){
//       if(err){
//           console.log(err);
//       } else{
//           //then, redirect to the index
//           res.redirect("/blogs");
//       }
//   });
  
// });

//CREATE THAT WORKS
app.post("/blogs", function(req, res) {
  var title = req.body.title;
  var image = req.body.image;
  var body = req.sanitize(req.body.body);

  var newBlog = {title: title, image: image, body: body};

  Blog.create(newBlog, function(err, newlyCreated){
    if(err) {
      console.log(err);
      res.render("new");
    } else {
      res.redirect("blogs");
    }
  });
});

// SHOW route
app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
        console.log(err);
      } else {
  res.render("show", {blog: foundBlog});
      }
  });
});

// EDIT: displays form to update blog to DB
app.get("/blogs/:id/edit", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log(err);
    } else {
res.render("edit", {blog: foundBlog});
    }
  });
});

//UPDATE: save updated campsite to DB

app.put("/blogs/:id", function(req, res){
  var title = req.body.title;
  var image = req.body.image;
  var body = req.sanitize(req.body.body);
  var updateBlog = {title: title, image: image, body: body};
  Blog.findByIdAndUpdate(req.params.id, updateBlog, function(err, updatedBlog){
    if(err){
      console.log(err);
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// DESTROY: delete single entry from DB
app.delete("/blogs/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  })
});

//TABLE of RESTful routes

app.get("/routes", function(req, res){
  res.render("routes");
});
