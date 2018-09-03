console.log("PRINT FACTORIAL RESULT");

var num = prompt("Enter a number to see its factorial");

if(Number(num) === 0) {
  alert("Factorial of " + num + " is 1");
}

else {

for(i = num; i > 0; i--) {
 i *= i;
}
 alert("Factorial of " + num + " is " + i);
}


