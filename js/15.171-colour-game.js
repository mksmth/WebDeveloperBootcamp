var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
//generate all new 
colours = generateRandomColours(6);
//pick a new random colour from array
pickedColour = pickColour();
//change colours of squares
colourDisplay.textContent = pickedColour.toUpperCase();
for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colours[i];
  }
});

colourDisplay.textContent = pickedColour.toUpperCase();

for(var i = 0; i < squares.length; i++) {
  //add initial colours to squares
  squares[i].style.backgroundColor = colours[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColour = this.style.backgroundColor;
    if(clickedColour === pickedColour) {
      messageDisplay.textContent = "Correct!";
      changeColours(clickedColour);
      h1.style.backgroundColor = pickedColour;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
      }
    });
    }

// function changeColours(colour) {
// for(var i = 0; i < colours.length; i++) {
//   squares[i].style.backgroundColor = colour;
//   }
// }
function changeColours(colour) {
  squares.forEach(function(square) {
    square.style.backgroundColor = colour;
  });
}

function pickColour() {
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i< num; i++) {
    //get random colour and push into array
    arr.push(randomColour());
  }
  //return that array
  return arr;
}

function randomColour() {
  //pick red
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}