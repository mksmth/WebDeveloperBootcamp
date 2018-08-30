console.log("PRINT ALL NUMBERS FROM -10 TO 19");

for(i = -10; i <= 19; i++) {
 console.log(i);
}

console.log("PRINT EVEN NUMBERS BETWEEN 10 AND 40");


for(i = 10; i <= 40; i+=2) {
  console.log(i);
}

console.log("PRINT ODD NUMBERS 300 TO 333");

for(i = 300; i <= 333; i++) {
  if(i % 2 === 1) {
  console.log(i);
  }
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(i = 5; i <=50; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
