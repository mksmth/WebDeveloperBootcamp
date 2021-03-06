var express = require("express");
var router = express.Router({mergeParams: true});
var Campsite = require("../models/campsite");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// ******** NEW COMMENTS *******

router.get("/new", middleware.isLoggedIn, function(req, res){
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

  router.post("/", middleware.isLoggedIn, function(req, res) {
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

// ****** EDIT COMMENT ******

router.get("/:comment_id/edit", middleware.isLoggedIn, middleware.checkCommentAuthor, function(req, res){
  Comment.findById(req.params.comment_id, function(err, foundComment){
    if(err){
      res.redirect("back");
        } else {
    res.render("comments/edit", {comment: foundComment, campsite_id: req.params.id});
        }
  });
});

// ****** UPDATE COMMENT ******
router.put("/:comment_id", middleware.checkCommentAuthor, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
      if(err) {
        res.redirect("back");
    } else {
        console.log("This comment was updated by: " + req.user.username);
        res.redirect("/campsites/" + req.params.id);
    }
  });
});

 
// DESTROY A COMMENT
router.delete("/:comment_id", middleware.checkCommentAuthor, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err){
    if(err) {
      res.redirect("back");
    } else {
      console.log("This campsite was deleted by: " + req.user.username);
      req.flash("success", "You have deleted a comment");
      res.redirect("/campsites/" + req.params.id);
    }
  });
});


module.exports = router;