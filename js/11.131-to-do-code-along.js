var todos = ["Buy New Turtle"];


window.setTimeout(function() {
  // put all of your JS code from the lecture here


while (input !== "quit") {

  var input = prompt("What do you want to do today?");


if(input === "list") {
  console.log(todos);
} else if(input === "new") {
  var newTodo = prompt("Enter new todo to do today?");
  todos.push(newTodo);
}

}
console.log("See you later!!");


}, 500);