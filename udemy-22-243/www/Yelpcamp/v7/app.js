var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    LocalStrategy         =  require("passport-local"),
    Campsite              = require("./models/campsite"),
    Comment               = require("./models/comment"),
    User                  = require("./models/user"),
    seedDB                = require("./seeds");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/yelpcamp_v7", {useNewUrlParser: true});

app.listen(3007);

//SEED DB
seedDB();

//PASSPORT CONFIG

app.use(require("express-session")({
  secret: "Alfie is the cutest dog",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});


app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", function(req, res){
	res.redirect("/campsites");
});

// INDEX
app.get("/campsites", function(req, res){
  // Get all campsites from db
	Campsite.find({}, function(err, allCampsites){
      if(err){
          console.log(err);
      } else {
          res.render("campsites/index", {campsites:allCampsites});
      }
    });
  });

 // SHOW ONE CAMPSITE DETAILS
app.get("/campsites/:id", function(req, res){
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

// NEW: displays form to add new campsite to DB
app.get("/campsites/new", function(req, res){
  res.render("campsites/new");
});

//CREATE:
app.post("/campsites", function(req, res) {
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




// ==================
// COMMENTS ROUTES
// ==================

// ******** NEW COMMENTS FORM *******

app.get("/campsites/:id/comments/new", isLoggedIn, function(req, res){
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

  app.post("/campsites/:id/comments", isLoggedIn, function(req, res) {
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
        campsite.comments.push(comment);
        campsite.save();
   //redirect
       res.redirect("/campsites/" + campsite._id);
        }
      });
    }
  });
});

// ==================
// AUTH ROUTES
// ==================

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
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

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
  successReturnToOrRedirect: "/campsites",
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
  req.session.returnTo = req.originalUrl; 
res.redirect('/login');
}