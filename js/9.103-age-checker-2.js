var age = Number(prompt("What is your age?"));


if(age < 0) {
  document.write("You cannot possibly be serious!!");
}
else if(age === 21) {
  document.write("Happy 21st Birthday :)!!");
}
else if (age % Math.sqrt(age) === 0) {
  document.write("Perfect square!");
}
else if(age % 2 === 1) {
  document.write("Hey, your age is odd!!");
}


else {
  document.write("Wow you are " + age + " years old!");
}
