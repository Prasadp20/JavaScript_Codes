const readline = require("readline-sync");

const number = readline.question("Enter the number : ");

const remainderAfterDivisibleByThree = number % 3;
const remainderAfterDivisibleByFive = number % 5;
const remainderAfterDivisibleBySeven = number % 7;

if(remainderAfterDivisibleByThree == 0 && remainderAfterDivisibleByFive == 0)
{
    console.log("Fizz");
}
else if(remainderAfterDivisibleByThree == 0 || remainderAfterDivisibleByFive == 0)
{
    console.log("Buzz");
}
else if(remainderAfterDivisibleBySeven == 0)
{
    console.log("BuzzBuzz");
}
else
{
    console.log("Not divisible by 3, 5 and 7");
}