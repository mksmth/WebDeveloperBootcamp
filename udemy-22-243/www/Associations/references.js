var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/associations_demo_2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Builder"
// })

Post.create({
  title: "How to cook the best bunter pt 4",
  content: "Gas mark 6 for 1.5 hours and so much more!"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
      if(err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save(function(err, data){
          if(err) {
            console.log(err);
          } else {
           console.log(data);
        }
      });
    }
  });
});

//Find user
//Find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });