var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/associations_demo", {useNewUrlParser: true});

//POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
  });
  var Post = mongoose.model("Post", postSchema);


//USER - email , name
var userSchema = new mongoose.Schema({
email: String,
name: String,
posts: [postSchema]
});
var User = mongoose.model("User", userSchema);





  // var newUser = new User({
  //   email: "billy@bunter.com",
  //   name: "Billy Bunter-Too"
  // });
  // newUser.posts.push({
  //   title: "Second associations blog post",
  //   content: "Here we talk again about Data Associations in our database for Blogs."
  // });

  // newUser.save(function(err, user){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     console.log(user);
  //   }
  // })
//****************** 
  // var newPost = new Post({
  //   title: "First associations blog post",
  //   content: "Here we talk about Data Associations in our database for Blogs."
  // });
  // newPost.save(function(err, post){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     console.log(post);
  //   }
  // })

  //******** ********
  
User.findOne({name: "Billy Bunter"}, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.posts.push({
      title: "Two fat men",
      content: "Voldemort, Voldemort"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
    }
});
}
});