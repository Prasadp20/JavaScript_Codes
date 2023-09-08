let date = new Date().toLocaleDateString();
const readline = require("readline-sync");
let userDBO = readline.question("Enter your date of birth : ");

const age = 17/8/1995 - 20/8/1995;  //date - userDBO;

console.log(date);
console.log(userDBO);

console.log(age);
