var listA = document.querySelector(".outputA ul");
var totalBoxA = document.querySelector(".outputA p");
var totalA = 0;

listA.innerHTML = "";
totalBoxA.textContent = "";

// number 1
var productsA = ["Underpants: 6.99","Socks: 5.99","T-shirt: 14.99","Trousers: 31.99","Shoes: 23.99"];
// number 2
for (var i = 0; i < productsA.length; i++) { 
  // number 3
  var product = productsA[i].split(": ");
  var name = product[0];
  var price = Number(product[1]);
  totalA += price;

  itemText = name + ": $" + price;

  var listItem = document.createElement("li");
  listItem.textContent = itemText;
  listA.appendChild(listItem);
}

totalBoxA.textContent = "Total: $" + totalA.toFixed(2);

// //Reading text from HTML and manipulating
// //***************************************

// var clothesList = document.querySelectorAll(".outputB li");
// var totalB = 0;

// var listB = document.querySelector(".outputB ul");
// listB.innerHTML = "";

// var totalBoxB = document.querySelector(".outputB p");
// totalBoxB.textContent = "";


// for (var i = 0; i < clothesList.length; i++) { 
//   // number 3
//   var product = clothesList[i].textContent.split(": ");
//   console.log(product);
//   var name = product[0];
//   var price = Number(product[1]);
//   totalB += price;

//   itemText = name + ": $" + price;

//   var listItem = document.createElement("li");
//   listItem.textContent = itemText;
//   listB.appendChild(listItem);
// }

// totalBoxB.textContent = "Total: $" + totalB.toFixed(2);

//Reading text from HTML and manipulating with forEach
//****************************************************

var clothesList = document.querySelectorAll(".outputB li");
var totalB = 0;

var listB = document.querySelector(".outputB ul");
listB.innerHTML = "";

var totalBoxB = document.querySelector(".outputB p");
totalBoxB.textContent = "";


clothesList.forEach(function(clothing) { 
  var product = clothing.textContent.split(": ");
  var name = product[0];
  var price = Number(product[1]);
  totalB += price;

  itemText = name + ": $" + price;

  var listItem = document.createElement("li");
  listItem.textContent = itemText;
  listB.appendChild(listItem);
}
);

totalBoxB.textContent = "Total: $" + totalB.toFixed(2);
