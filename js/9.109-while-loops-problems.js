//print all numbers from -19 to 10
var num = -19;

while(num <= 10) {
 console.log(num);
 num++;
}

//print even numbers between 10 and 40

var num = 10;

while(num <= 40) {
  console.log(num);
  num+=2;
}

//print odd numbers 300 to 333

var num = 300;

while(num <= 333) {
  if(num % 2 === 1) {
  console.log(num);
  }
  num++;
}

//print all numbers divisible by 5 and 3 between 5 and 50

var num = 5;

while(num <=50) {
  if(num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++
}
