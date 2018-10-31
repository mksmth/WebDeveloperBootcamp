  var numSquares = 6;
  var colours = [];
  var pickedColour;
  var squares = document.querySelectorAll(".square");
  var colourDisplay = document.querySelector("#colourDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var modeButtons = document.querySelectorAll(".mode");
  // var easyBtn = document.querySelector("#easyBtn");
  // var hardBtn = document.querySelector("#hardBtn");

  init();

  function init() {
    for(var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        modeButtons[0].classList.contains("selected") ? numSquares = 3: numSquares = 6;
        reset();
      });
    }

    for(var i = 0; i < squares.length; i++) {
      //add click listeners to squares
      squares[i].addEventListener("click", function() {
        var clickedColour = this.style.backgroundColor;
        if(clickedColour === pickedColour) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "PlayAgain?";
          changeColours(clickedColour);
          h1.style.backgroundColor = pickedColour;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    }
    reset();
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

  resetButton.addEventListener("click", function(){
    reset();
  })


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