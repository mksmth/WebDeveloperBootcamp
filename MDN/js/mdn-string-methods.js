
//CITIES LIST
//***********

var list = document.querySelector('.outputA ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  var lower = input.toLowerCase();
  var initial = lower.slice(0,1);
  var final = lower.replace(initial, initial.toUpperCase());

  var result = final;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

//READING CITIES LIST FROM THE HTML AND MANIPULATING :) ******

var citiesList = document.querySelectorAll(".outputZ li");

var list = document.querySelector(".outputZ ul");
list.innerHTML = "";

for(var i = 0; i < citiesList.length; i++) {
  var lower = citiesList[i].textContent.toLowerCase();
  var initial = lower.slice(0,1);
  var final = lower.replace(initial, initial.toUpperCase());
  var listItem = document.createElement("li");
  listItem.textContent = final;
  list.appendChild(listItem);
}

//READING CITIES LIST FROM THE HTML AND MANIPULATING WITH FOREACH :) ******

var citiesList = document.querySelectorAll(".outputX li");

var list = document.querySelector(".outputX ul");
list.innerHTML = "";

citiesList.forEach(function(city) {
  var lower = city.textContent.toLowerCase();
  var initial = lower.slice(0,1);
  var final = lower.replace(initial, initial.toUpperCase());
  var listItem = document.createElement("li");
  listItem.textContent = final;
  list.appendChild(listItem);
}
);


// const nodelist = document.querySelectorAll('div');
// const nodelistToArray = Array.apply(null, nodelist);

// //later on ..

// nodelistToArray.forEach(...);
// nodelistToArray.map(...);
// nodelistToArray.slice(...);





//Train Stations
//***************

var list = document.querySelector('.outputB ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here  
var code = stations[i].slice(0,3);
var colon = stations[i].indexOf(";");
var name = stations[i].slice(colon + 1);
var result = code + ": " + name;
var listItem = document.createElement('li');
listItem.textContent = result;
list.appendChild(listItem);
}

//Reading Train Stations from HTML list and manipulating
//******************************************************

var stationsList = document.querySelectorAll('.outputY li');

var list = document.querySelector(".outputY ul");
list.innerHTML = "";


for (var i = 0; i < stationsList.length; i++) {
  var input = stationsList[i].textContent;
  var code = input.slice(0,3);
  var colon = input.indexOf(";");
  var name = input.slice(colon + 1);
  var result = code + ": " + name;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
