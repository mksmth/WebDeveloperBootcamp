var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Campsite = require("./models/campsite"),
Comment = require("./models/comment"),
seedDB = require("./seeds");

app.listen(3004);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/yelpcamp_v4", {useNewUrlParser: true});

//SEED DB
seedDB();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

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
  Campsite.findById(req.params.id).populate("comments").exec(function(err, foundCampsite){
      if(err){
        console.log(err);
      } else {
          console.log(foundCampsite);
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
