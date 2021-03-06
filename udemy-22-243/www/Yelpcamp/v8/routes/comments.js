var express = require("express");
var router = express.Router({mergeParams: true});
var Campsite = require("../models/campsite");
var Comment = require("../models/comment");

// ******** NEW COMMENTS *******

router.get("/new", isLoggedIn, function(req, res){
  //find the campsite with this id and render the SHOW template (PDP)
  Campsite.findById(req.params.id, function(err, campsite) {
      if(err){
        console.log(err);
      } else {
          res.render("comments/new", {campsite: campsite});
        }
    });
  });

  // ******** CREATE COMMENTS  *******

  router.post("/", isLoggedIn, function(req, res) {
    // var author = req.body.author;
    // var text = req.body.text;
    // var newComment = {author: author, text: text};

    //lookup campsite using ID
    Campsite.findById(req.params.id, function(err, campsite) {
      if(err){
        console.log(err);
      } else {
    //create new comment
    Comment.create(req.body.comment, function(err, comment){
      if(err){
        console.log(err);
       res.redirect("/campsites");
      } else {
        console.log("This comment was published by: " + req.user.username);
        comment.author.id = req.user._id;
        comment.author.username = req.user.username;
        comment.save();
        campsite.comments.push(comment);
        campsite.save();
   //redirect
       res.redirect("/campsites/" + campsite._id);
        }
      });
    }
  });
});

// ****** MIDDLEWARE ******

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
  return next();
  }
  req.session.returnTo = req.originalUrl; 
res.redirect('/login');
}

module.exports = router;