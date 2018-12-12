var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&APPID=f681b843e0875571303cf2de6b0d3854', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parsedData = JSON.parse(body);
  var city = parsedData["name"];
  var sunriseUNIX = parsedData["sys"]["sunrise"];
  var date = new Date(sunriseUNIX*1000);
  var sunrise = date.toTimeString();



// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(sunriseUNIX * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();
// var sunrise = date.toTimeString();
// Will display time in 10:30:23 format
// var sunrise = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  console.log("The sunrise in " + city + " will be at " + sunrise);

});

