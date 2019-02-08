var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("./models/user"),
    LocalStrategy         =  require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

app.set("view engine", "ejs");

app.use(require("express-session")({
  secret: "Alfie is the boojiest dog in the world",
  resave: false,
  saveUninitialized: false
  }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost/auth_demo", {useNewUrlParser: true});

app.listen(3000);
console.log("Server Started on port 3000");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
});

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
  req.body.username;
  req.body.password;
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    });
});
});

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}