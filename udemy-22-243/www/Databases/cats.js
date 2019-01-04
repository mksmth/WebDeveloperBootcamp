var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
  });

  var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the db

// var george = new Cat({
//   name: "George",
//   age: 11,
//   temperament: "feisty"
// });

// var george = new Cat({
//   name: "Alfie",
//   age: 12.5,
//   temperament: "dog-like"
// });

// george.save(function(err, cat){
//   if(err) {
//     console.log("Something went wrong again")
//   } else {
//     console.log("WE SAVED A CAT!");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Grumpy",
  age: 17.5,
  temperament: "bland"
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat)
  }
});
//retrieve all cats from db

Cat.find({}, function(err, cats){
  if(err){
    console.log("OH NO< ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CATS:");
    console.log(cats);
  }
});