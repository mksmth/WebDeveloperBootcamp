var ageYears = prompt("How old are you in years?");
var ageDays = ageYears * 365;
var leapYears = Math.floor(ageYears / 4);

ageDays = ageDays + leapYears;
console.log(leapYears);

alert("You are " + ageDays + " days old");
