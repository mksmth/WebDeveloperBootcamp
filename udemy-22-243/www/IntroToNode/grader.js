var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


function average(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
    var mean = Math.round(total / arr.length);
    }
    return mean;
}

console.log("Average of scores is: " + average(scores));
console.log("Average of scores2 is: " + average(scores2));

