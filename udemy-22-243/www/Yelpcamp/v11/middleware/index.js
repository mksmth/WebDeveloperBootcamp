var Campsite = require("../models/campsite");
var Comment = require("../models/comment");

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  req.flash("error", "Please Log in to do that.");
res.redirect('/login');
}

function checkCampsiteAuthor(req, res, next){
  if(req.isAuthenticated()){
    Campsite.findById(req.params.id, function(err, foundCampsite){
      if(err || !foundCampsite) {
        req.flash("error", "Campsite not found");
        res.redirect("/campsites");
      } else {
        if(foundCampsite.author.id.equals(req.user._id)){
          next();
        } else {
          req.flash("error", "You don't have permission to do that");
          res.redirect("/campsites/" + req.params.id);
        }
      }
    });
  } else {
    req.flash("error", "Please Log in to do that");
    res.redirect("/login");
  }
}


function checkCommentAuthor(req, res, next){
  if(req.isAuthenticated()){
    Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err){
        req.flash("error", "Oops, something went wrong. Please try again later.");
        res.redirect("back");
      } else {
        if(foundComment.author.id.equals(req.user._id)){
          next();
        } else {
          req.flash("error", "You don't have permission to do that!");
          res.redirect("/campsites/" + req.params.id);
        }
      }
    });
  } else {
    req.flash("error", "You need to Log in to do that.");
    res.redirect("/login");
  }
}

module.exports = {
  isLoggedIn : isLoggedIn,
  checkCampsiteAuthor : checkCampsiteAuthor,
  checkCommentAuthor : checkCommentAuthor
}