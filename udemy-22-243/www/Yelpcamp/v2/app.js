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
var campsiteSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campsite = mongoose.model("Campsite", campsiteSchema);

// Campsite.create(
//   {
//     name: "Kendal Mint Camp",
//     image: "https://www.campingandcaravanningclub.co.uk/campsites/images/sites/full/6190/2.jpg",
//     description: "Some mint cake, somewhere in Kendal"

//   }, function(err, campsite){
//     if(err){
//       console/log(err);
//     } else {
//       console.log("NEW Campsite!!:");
//       console.log(campsite);
//       }
//   });

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// var campsites = [
//   {name: "Grizedale", image: "https://assets.bedful.com/images/407af1e9acee5bc371e4af51de0ba2dea1fc4cc1/large.jpg"},
//   {name: "Helvellyn", image: "http://3.bp.blogspot.com/-xw1hQ507DTM/UCpQiqJ_HfI/AAAAAAAABRg/6a7TWhRQnYc/s1600/9.JPG"},
//   {name: "Catbells", image: "http://www.campingwithstyle.co.uk/wp-content/uploads/2017/09/ridge-to-catbells.jpg"},
//   {name: "Braithwaite", image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e6/26/a0/scotgate-holiday-park.jpg"}
//  ];


app.get("/", function(req, res){
	res.redirect("/campsites");
});

app.get("/campsites", function(req, res){
  // Get all campsites from db
	Campsite.find({}, function(err, allCampsites){
      if(err){
          console.log(err);
      } else {
          res.render("index", {campsites:allCampsites});
      }
    });
  });

app.post("/campsites", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampsite = {name: name, image: image, description: description};
  // Create new campsite and save to db
  Campsite.create(newCampsite, function(err, newlyCreated){
    if(err) {
      console.log(err);
    } else {
      res.redirect("campsites");
    }
  });
});

// NEW: displays form to add new campsite to DB
app.get("/campsites/new", function(req, res){
  res.render("new");
});

// SHOW ONE CAMPSITE DETAILS
app.get("/campsites/:id", function(req, res){
  //find the campsite with this id and render the SHOW template (PDP)
  Campsite.findById(req.params.id, function(err, foundCampsite){
      if(err){
        console.log(err);
      } else {
  res.render("show", {campsite: foundCampsite});
      }
  });
});

// RESTFUL ROUTES
// ===============

// name      url               verb      description
// INDEX     /campsites      GET       display all campsites
// NEW       /campsites/new  GET       display form for new campsite
// CREATE    /campsites      POST      add new campsite to DB 
// SHOW      /campsites/:id  GET       show one campsite details
