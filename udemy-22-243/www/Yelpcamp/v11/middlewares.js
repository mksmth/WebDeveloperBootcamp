var Campsite = require("./models/campsite");
var Comment = require("./models/comment");


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
    return next();
    }
    req.session.returnTo = req.originalUrl; 
  res.redirect('/login');
  }


  function checkCampsiteAuthor(req, res, next){
    if(req.isAuthenticated()){
      Campsite.findById(req.params.id, function(err, foundCampsite){
        if(err){
          res.redirect("back");
        } else {
          if(foundCampsite.author.id.equals(req.user._id)){
            next();
          } else {
            res.redirect("back");
          }
        }
      });
    } else {
      res.redirect("back");
    }
  }


  function checkCommentAuthor(req, res, next){
    if(req.isAuthenticated()){
      Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
          res.redirect("back");
        } else {
          if(foundComment.author.id.equals(req.user._id)){
            next();
          } else {
            res.redirect("back");
          }
        }
      });
    } else {
      res.redirect("/login");
    }
  }

  module.exports = {
    isLoggedIn : isLoggedIn,
    checkCampsiteAuthor : checkCampsiteAuthor,
    checkCommentAuthor : checkCommentAuthor
}