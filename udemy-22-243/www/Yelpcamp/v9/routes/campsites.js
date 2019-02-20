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
router.get("/new", isLoggedIn, function(req, res){
  res.render("campsites/new");
});
// // ******** CREATE COMMENTS  *******

// router.post("/", isLoggedIn, function(req, res) {
//   // var author = req.body.author;
//   // var text = req.body.text;
//   // var newComment = {author: author, text: text};

//   //lookup campsite using ID
//   Campsite.findById(req.params.id, function(err, campsite) {
//     if(err){
//       console.log(err);
//     } else {
//   //create new comment
//   Comment.create(req.body.comment, function(err, comment){
//     if(err){
//       console.log(err);
//      res.redirect("/campsites");
//     } else {
//       console.log("This comment was published by: " + req.user.username);
//       comment.author.id = req.user._id;
//       comment.author.username = req.user.username;
//       comment.save();
//       campsite.comments.push(comment);
//       campsite.save();
//  //redirect
//      res.redirect("/campsites/" + campsite._id);
//       }
//     });
//   }
// });
// });
// **********
// **********

//CREATE A CAMPSITE
router.post("/", isLoggedIn, function(req, res) {
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

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
  return next();
  }
  req.session.returnTo = req.originalUrl; 
res.redirect('/login');
}

module.exports = router;