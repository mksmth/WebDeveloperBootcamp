var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

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
      req.flash("error", err.message);
      return res.redirect("back");
    }
    passport.authenticate("local")(req, res, function(){
        req.flash("success", "Welcome, you're now signed up!");
        res.redirect("/campsites");
    });
}); 
});

router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login", passport.authenticate("local", {
  successReturnToOrRedirect: "/campsites",
  failureRedirect: "/login",
  failureFlash: true,
  successFlash: "Welcome back to Yelpcamp!"
}), function(req, res){
});

router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged you out");
  res.redirect("/campsites");
});

module.exports = router;