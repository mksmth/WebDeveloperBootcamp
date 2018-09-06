
//define array
var alphabet = ["a", "b", "c", "d", "e", "f"];


//Simple for loop
console.log("for loop output;");

for(i = alphabet.length - 1; i >= 0; i--) {
console.log(alphabet[i]);
}

console.log("**********");

//function including the for loop
console.log("Execute printReverse()");

function printReverse() {
  for(i = alphabet.length - 1; i >= 0; i--) {
    console.log(alphabet[i]);
  }
}

console.log("**********");

console.log("Execute isUniform()");


var stuff = ["a","a","a","a"];
var firstItem = stuff[0];

function isUniform() {
  for(i = 1; i < stuff.length; i++) {
    if(stuff[i] !== firstItem)
      return false;
  }
  return true;
}


console.log("**********");

console.log("Execute sumArray()");

var numbers = [125, 95, 107, 3, 27, 10, 5, -5];
var total = 0;

function sumArray() {
  for(i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log("**********");

console.log("Execute max()");

var biggest = numbers[0];

function max() {

  for(i = 1; i < numbers.length; i++) {
    if(numbers[i] > biggest) {
      biggest = numbers[i];
      }
    }
  return biggest;
}

