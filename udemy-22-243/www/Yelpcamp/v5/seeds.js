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
    description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
  },
  {
    name: "Catbells", 
    image: "http://www.campingwithstyle.co.uk/wp-content/uploads/2017/09/ridge-to-catbells.jpg", 
    description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
  },
  {
    name: "Braithwaite", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e6/26/a0/scotgate-holiday-park.jpg", 
    description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
  }
 ];

function seedDB(){
  Campsite.deleteMany({}, function(err){
    if(err) {
      console.log(err);
    } 
    console.log("Campsites removed");
  Comment.deleteMany({}, function(err){
    if(err) {
      console.log(err);
    } 
    console.log("Comments removed");
    });
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