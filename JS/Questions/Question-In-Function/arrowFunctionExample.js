/*
// example 1
const Mul = (number1, number2) => {
    let output = number1*number2;
    return output;
}
Mul(4,5);

// example 2
const Div = (number1, number2) => {
    return number1/number2;
}
Div(4,5);

// example 3 no return keyword required for single operation 
const Add = (number1, number2) = number1+number2;
Add(4,5);
*/
//create an arrow function that returns a string that says "You are eligible to vote" or " You are not eligile to vote" based on passed age vai argument.

const vote = (age) => age>=18 ? `You are eligible to vote` : `You are not eligible to vote`;
    // return age>=18 ? `You are eligible to vote` : `You are not eligible to vote`;
    // return agru; return expect value or expression (cuz expression also changes to value )

console.log(vote(10));
