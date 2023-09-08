/** 
    Ternary Operator --> condition ? yes : no;
*/

const readline = require("readline-sync");
const userMarks = readline.question("Enter your marks : ");

// if(userMarks > 60)
// {
//     console.log("You got a 1st class.");
// }
// else
// {
//     console.log("You are failed.");
// }

//(userMarks > 60) ? console.log("You got a 1st class") : console.log("You are failed.");
const result = userMarks > 60 ? "You got a 1st class" : "You are failed.";
console.log(result);
