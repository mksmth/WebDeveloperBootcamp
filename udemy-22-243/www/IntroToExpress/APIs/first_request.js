// var request = require("request");
// request("http://www.google.co.uk", function(error, response, body){
//   if(error){
//     console.log("Something WENT WRONG!");
//     console.log(error);
//     } else {
//       if(response.statusCode === 200){
//         console.log("It WORKED!");
//         console.log(body);
//       }
//     }
// });

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});