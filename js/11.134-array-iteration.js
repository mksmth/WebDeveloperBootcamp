var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(num){
  if(num % 3 === 0) {
    console.log(num);
      }
});

for(i = 1; i < numbers.length; i++) {
  if(numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
}