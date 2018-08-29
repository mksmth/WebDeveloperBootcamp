console.log("print all numbers from -10 to 19");

for(num = -10; num <= 19; num++) {
 console.log(num);
}

console.log("print even numbers between 10 and 40");


for(num = 10; num <= 40; num+=2) {
  console.log(num);
}

console.log("print odd numbers 300 to 333");

for(num = 300; num <= 333; num++) {
  if(num % 2 === 1) {
  console.log(num);
  }
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50");

for(num = 5; num <=50; num++) {
  if(num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
}
