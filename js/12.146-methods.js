//Method is just a function defined within an Object
//In this context, the keyword this refers to the object within which it is used (not just the function where it is used)

var comments = {};
comments.data = ["Good job", "bye", "Useless"];

comments.print = function() {
  this.data.forEach(function(el) {
    console.log(el);
  });
}
console.log("Execute comments.print()");