const readlineSync = require("readline-sync");
const userName = readlineSync.question("Please Enter Your Name : \n");
let birthYear = readlineSync.question("Enter your date of birth : \n");

let todayDate = new Date();
let year = todayDate.getFullYear();
let age = Number(year) - Number(birthYear);

if(age > 18)
console.log(`Mr.${userName} now you are ${age} old so you are able to do voating.`)

else
console.log(`Mr.${userName} you are ${age} old so you are not able to do voating.`)


