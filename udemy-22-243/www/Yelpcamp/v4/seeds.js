var mongoose = require("mongoose");
var Campsite = require("./models/campsite");
var Comment = require("./models/comment");
//ADD A FEW CAMPSITES

var data = [
  {
    name: "Grizedale", 
    image: "https://assets.bedful.com/images/407af1e9acee5bc371e4af51de0ba2dea1fc4cc1/large.jpg", 
    description: "Lovely campsite in the Lakes"
  },
  {
    name: "Helvellyn", 
    image: "http://3.bp.blogspot.com/-xw1hQ507DTM/UCpQiqJ_HfI/AAAAAAAABRg/6a7TWhRQnYc/s1600/9.JPG", 
    description: "Lovely campsite in the Lakeys"
  },
  {
    name: "Catbells", 
    image: "http://www.campingwithstyle.co.uk/wp-content/uploads/2017/09/ridge-to-catbells.jpg", 
    description: "Lovely campsite in the Lakes District"
  },
  {
    name: "Braithwaite", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e6/26/a0/scotgate-holiday-park.jpg", 
    description: "Lovely campsite in the Lake District"
  }
 ];

function seedDB(){
  Campsite.deleteMany({}, function(err){
    if(err) {
      console.log(err);
    } 
    console.log("Campsites removed");
    data.forEach(function(seed){
      Campsite.create(seed, function(err, campsite){
        if(err){
          console.log(err);
        } else {
          console.log("Added a Campsite");
          Comment.create(
            {
              text: "This place is beautiful",
              author: "HomersOdyssey"
             },
             {
              text: "This place is soooo beautiful",
              author: "Iliad's Journey"
             },
              function(err, comments){
                  if(err){
                    console.log(err);
                  } else {
                    campsite.comments.push(comments);
                    campsite.save();
                    console.log("Added a comment");
                  }
             })
        }
      });
    });
  });   
}

  
//ADD A FEW COMMENTS

module.exports = seedDB;