const grabCities = document.querySelectorAll("li");
const citiesList = Array.apply(null, grabCities);
var cities = [;
for(var i = 0; i < citiesList.length; i++) {
   cities += "\"";
   cities += citiesList[i].textContent;
   cities += "\", ";
}
var cities += ];
console.log(cities);


// const nodelist = document.querySelectorAll('div');
// const nodelistToArray = Array.apply(null, nodelist);

//list.innerHTML = '';
//var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
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

var list = document.querySelector('.output ul');
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
