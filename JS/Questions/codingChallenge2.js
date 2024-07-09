/*
#Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
3.Finally, Use Ternary operator to display the output
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK
*/

let markWeight = 78,
    markHeight = 1.69,
    johnWeight = 92,
    johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);

// `${}` => template literal 
//1
if(markBMI >  johnBMI){
    console.log("Mark's BMI is higher than John's!");
}
else {
    console.log("John's BMI is higher than Mark's!");
}

//3
let ismarkHigherBMI = (markBMI > johnBMI) ? `Mark's BMI (${markBMI})  is higher than John's BMI (${johnBMI}) !` : `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})  !`;
console.log(ismarkHigherBMI);
