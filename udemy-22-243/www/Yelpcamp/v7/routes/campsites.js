var express = require("express");
var router = express.Router();
var Campsite = require("../models/campsite");

// INDEX
router.get("/", function(req, res){
  // Get all campsites from db
	Campsite.find({}, function(err, allCampsites){
      if(err){
          console.log(err);
      } else {
          res.render("campsites/index", {campsites:allCampsites});
      }
    });
  });


// NEW: displays form to add new campsite to DB
router.get("/new", function(req, res){
  res.render("campsites/new");
});

//CREATE A CAMPSITE
router.post("/", function(req, res) {
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

 // SHOW ONE CAMPSITE DETAILS
 router.get("/:id", function(req, res){
  //find the campsite with this id and render the SHOW template (PDP)
  Campsite.findById(req.params.id).populate("comments").exec(function(err, foundCampsite){
      if(err){
        console.log(err);
      } else {
          // console.log(foundCampsite);
          res.render("campsites/show", {campsite: foundCampsite});
        }
    });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
  return next();
  }
  req.session.returnTo = req.originalUrl; 
res.redirect('/login');
}

module.exports = router;