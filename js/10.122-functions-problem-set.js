function isEven(num) {
  if(num % 2 === 0) {
      return true;
  } else {
    return false;
  }
}
//refactor: return num % 2 === 0;
//boolean so evaluates true or false without any extra code

function factorial(num){
  var total = 1;
  for(i=num; i>0; i--){
    total *= i;
  }
  return total;
}


function kebabToSnake(text) {
      var string = text.replace("/-/g", "_");
      return string;
}