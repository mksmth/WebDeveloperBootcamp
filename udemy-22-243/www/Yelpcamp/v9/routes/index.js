var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/favicon.ico", (req, res) => res.sendStatus(204));

router.get("/", function(req, res){
	res.redirect("/campsites");
});

// ==================
// AUTH ROUTES
// ==================

router.get("/register", function(req, res){
	res.render("register");
});

router.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
        res.redirect("campsites");
    });
}); 
});

router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login", passport.authenticate("local", {
  successReturnToOrRedirect: "/campsites",
  failureRedirect: "/login"
}) ,function(req, res){
});

router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
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