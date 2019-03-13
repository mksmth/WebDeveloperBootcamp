var express = require("express");
var router = express.Router();
var Campsite = require("../models/campsite");
var middleware = require("../middlewares");

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
router.get("/new", middleware.isLoggedIn, function(req, res){
  res.render("campsites/new");
});


//CREATE A CAMPSITE
router.post("/", middleware.isLoggedIn, function(req, res) {
  // Create new campsite and save to db
  Campsite.create(req.body.campsite, function(err, campsite){
    campsite.author.id = req.user._id;
    campsite.author.username = req.user.username;
    campsite.save();
        if(err) {
      console.log(err);
    } else {
      console.log("This campsite was published by: " + req.user.username);
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

// EDIT CAMPSITE
router.get("/:id/edit", middleware.checkCampsiteAuthor, function(req, res){
  Campsite.findById(req.params.id, function(err, foundCampsite){
    res.render("campsites/edit", {campsite: foundCampsite});
  });
});

// UPDATE CAMPSITE
router.put("/:id", middleware.checkCampsiteAuthor, function(req, res) {
  Campsite.findByIdAndUpdate(req.params.id, req.body.campsite, function(err, updatedCampsite){
      if(err) {
        res.redirect("/campsites");
    } else {
        console.log("This campsite was updated by: " + req.user.username);
        res.redirect("/campsites/" + req.params.id);
    }
  });
});

// DESTROY A CAMPSITE
router.delete("/:id", middleware.checkCampsiteAuthor, function(req, res) {
  Campsite.findByIdAndRemove(req.params.id, function(err){
    if(err) {
      res.redirect("/campsites/" + req.params.id);
    } else {
      console.log("This campsite was deleted by: " + req.user.username);
      res.redirect("/campsites/");
    }
  });
});


module.exports = router;