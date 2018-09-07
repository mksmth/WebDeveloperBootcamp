var movies = [
  {
    title: "Star Wars",
    rating: 3.5,
    hasWatched: false
  },
  {
    title: "A Canterbury Tale",
    hasWatched: true,
    rating: 5
  }
]
movies.forEach(function(movie) {
  if(movie.hasWatched) {
    console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
  }
  else {
    console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
  }
});

//OR: refactor as:

movies.forEach(function(movie) {
  var result = "You have ";
    if(movie.hasWatched) {
      result += "watched \"";
    }
    else {
      result += "not seen \"";
    }  
      result += movie.title + "\" - " + movie.rating + " stars";
      console.log(result);
});

//OR: refactor as:

function buildString(movie) {
  var result = "You have ";
    if(movie.hasWatched) {
      result += "watched \"";
    }
    else {
      result += "not seen \"";
    }  
      result += movie.title + "\" - " + movie.rating + " stars";
  return result;    
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
