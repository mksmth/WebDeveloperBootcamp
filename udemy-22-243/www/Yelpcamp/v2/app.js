var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

app.listen(3002);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Kendal Mint Camp",
//     image: "https://www.campingandcaravanningclub.co.uk/campsites/images/sites/full/6190/2.jpg",
//     description: "Some mint cake, somewhere in Kendal"

//   }, function(err, campground){
//     if(err){
//       console/log(err);
//     } else {
//       console.log("NEW CAMPGROUND!!:");
//       console.log(campground);
//       }
//   });

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// var campgrounds = [
//   {name: "Grizedale", image: "https://assets.bedful.com/images/407af1e9acee5bc371e4af51de0ba2dea1fc4cc1/large.jpg"},
//   {name: "Helvellyn", image: "http://3.bp.blogspot.com/-xw1hQ507DTM/UCpQiqJ_HfI/AAAAAAAABRg/6a7TWhRQnYc/s1600/9.JPG"},
//   {name: "Catbells", image: "http://www.campingwithstyle.co.uk/wp-content/uploads/2017/09/ridge-to-catbells.jpg"},
//   {name: "Braithwaite", image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e6/26/a0/scotgate-holiday-park.jpg"}
//  ];


app.get("/", function(req, res){
	res.render("home");
});

app.get("/campgrounds", function(req, res){
  // Get all campsites from db
	Campground.find({}, function(err, allCampgrounds){
      if(err){
          console.log(err);
      } else {
          res.render("index", {campgrounds:allCampgrounds});
      }
    });
  });

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  // Create new campsite and save to db
  Campground.create(newCampground, function(err, newlyCreated){
    if(err) {
      console.log(err);
    } else {
      res.redirect("campgrounds");
    }
  });
});

// NEW: displays form to add new campsite to DB
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

// SHOW ONE CAMPSITE DETAILS
app.get("/campgrounds/:id", function(req, res){
  //find the campsite with this id and render the SHOW template (PDP)
  Campground.findById(req.params.id, function(err, foundCampground){
      if(err){
        console.log(err);
      } else {
  res.render("show", {campground: foundCampground});
      }
  });
});

// RESTFUL ROUTES
// ===============

// name      url               verb      description
// INDEX     /campgrounds      GET       display all campsites
// NEW       /campgrounds/new  GET       display form for new campsite
// CREATE    /campgrounds      POST      add new campsite to DB 
// SHOW      /campgrounds/:id  GET       show one campsite details