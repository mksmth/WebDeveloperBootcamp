var button = document.querySelector("button");
var panel = document.querySelector("body");

button.addEventListener("click", function(){
  if (panel.style.background == "purple") {
    panel.style.background = null;
  }
  else {
    panel.style.background = "purple";
  }
});

