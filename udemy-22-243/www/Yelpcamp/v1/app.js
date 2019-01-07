var express = require("express");
var app = express();
app.use(express.static("public"));


app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

var campgrounds = [
  {name: "Grizedale", image: "https://assets.bedful.com/images/407af1e9acee5bc371e4af51de0ba2dea1fc4cc1/large.jpg"},
  {name: "Helvellyn", image: "http://3.bp.blogspot.com/-xw1hQ507DTM/UCpQiqJ_HfI/AAAAAAAABRg/6a7TWhRQnYc/s1600/9.JPG"},
  {name: "Catbells", image: "http://www.campingwithstyle.co.uk/wp-content/uploads/2017/09/ridge-to-catbells.jpg"},
  {name: "Braithwaite", image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e6/26/a0/scotgate-holiday-park.jpg"}
 ];


app.get("/", function(req, res){
	res.render("home");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});