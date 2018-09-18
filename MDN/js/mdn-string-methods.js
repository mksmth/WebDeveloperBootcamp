
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

//READING CITIES LIST FROM THE HTML AND SETTING AS AN ARRAY :) ******

const grabCities = document.querySelectorAll(".outputZ li");
const citiesList = Array.apply(null, grabCities);


var list = document.querySelector(".outputZ ul");
list.innerHTML = '';

for(var i = 0; i < citiesList.length; i++) {
  var input = citiesList[i].textContent;
  var lower = input.toString().toLowerCase();
  var initial = lower.slice(0,1);
  var final = lower.replace(initial, initial.toUpperCase());
  var result = final;
  var listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}