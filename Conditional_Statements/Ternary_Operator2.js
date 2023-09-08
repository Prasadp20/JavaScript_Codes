const marks = require("readline-sync");
const totalMarkScored = marks.question("Please enter your marks : ");

if(totalMarkScored < 40)
{
    console.log("You need to work hard.");
}
else if(totalMarkScored < 60)
{
    console.log("B Grade");
}
else if(totalMarkScored < 75)
{
    console.log("A Grade");
}
else if(totalMarkScored < 85)
{
    console.log("A++ Grade");
}
else
{
    console.log("Genius");
}

// let finalScore = totalMarkScored < 40