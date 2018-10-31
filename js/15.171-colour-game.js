var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

for(var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
}

function reset() {
  colours = generateRandomColours(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;
  resetButton.textContent = "New Colours";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++) {
    if(colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor=colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colours = generateRandomColours(numSquares);
//   pickedColour = pickColour();
//   colourDisplay.textContent = pickedColour;
//   for(var i = 0; i < squares.length; i++) {
//     if(colours[i]) {
//       squares[i].style.backgroundColor = colours[i];
//     } else {
//       squares[i].style.display = "none";
//     }

//   }
// });

// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colours = generateRandomColours(numSquares);
//   pickedColour = pickColour();
//   colourDisplay.textContent = pickedColour;
//   for(var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colours[i];
//       squares[i].style.display = "block";
//     }
//   }
// );

resetButton.addEventListener("click", function(){
//generate all new 
colours = generateRandomColours(numSquares);
//pick a new random colour from array
pickedColour = pickColour();
//change colours of squares
colourDisplay.textContent = pickedColour.toUpperCase();
this.textContent = "New Colours";
messageDisplay.textContent = "";
for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colours[i];
}
h1.style.backgroundColor = "steelblue";
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
      resetButton.textContent = "Play Again?";
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