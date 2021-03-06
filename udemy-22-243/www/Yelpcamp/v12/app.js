var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    flash                 = require("connect-flash"),
    passport              = require("passport"),
    LocalStrategy         =  require("passport-local"),
    methodOverride        = require("method-override"),
    Campsite              = require("./models/campsite"),
    Comment               = require("./models/comment"),
    User                  = require("./models/user"),
    seedDB                = require("./seeds");

var indexRoutes           = require("./routes/index"),
    campsiteRoutes        = require("./routes/campsites"),
    commentRoutes         = require("./routes/comments");




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/yelpcamp_v12", {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

app.listen(3012);

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
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use(indexRoutes);
app.use("/campsites", campsiteRoutes);
app.use("/campsites/:id/comments", commentRoutes);
