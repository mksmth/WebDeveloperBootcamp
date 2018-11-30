var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


function average(score){
  var total = 0;
  for(var i = 0; i < score.length; i++){
    total += score[i];
    var mean = Math.round(total / score.length);
    }
    return mean;
}

console.log("Average of scores is: " + average(scores));
console.log("Average of scores2 is: " + average(scores2));

function average2(scores) {
  var total = 0;
  scores.forEach(function(score){
    total += score;
    avg = Math.round(total / scores.length);
  });
  return avg
}

console.log("Average of scores is: " + average2(scores));
console.log("Average of scores2 is: " + average2(scores2));