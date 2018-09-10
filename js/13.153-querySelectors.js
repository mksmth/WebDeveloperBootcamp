//4+ ways to select first <p>:



var first = document.getElementById("first");
console.log("First: " + first);

var second = document.getElementsByClassName("special")[0];
console.log("Second: " + second);

var third = document.getElementsByTagName("p")[0];
console.log("Third: " + third);

var fourth = document.querySelector("p");
console.log("Fourth: " + fourth);

var fifth = document.querySelectorAll("p")[0];
console.log("Fifth: " + fifth);

var sixth = document.querySelector("#first");
console.log("Sixth: " + sixth);
