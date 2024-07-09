
function vote(Age) {
    let ans = Age >= 18 ? 'Eligible to vote' : 'No vote';
    console.log(ans);
    return ans;
}

Age(12);


// task 2 : Create a function that return if you are/were or will be 16 years old 

function calcAge(age) {

    if (age > 16) {
        return `You were 16 before ${age}-${16} year.`;
    }
    else if (age < 16) {
        return `You will be after ${16}-${age} year. `;
    }
    else {
        return `You are sweet 16`;
    }
}

console.log(calcAge(15));
console.log(calcAge(30));
console.log(calcAge(1));

// nested ternary operator is used to define 3 conditions 
let output2 = (age >= 16) ? (age > 16) ? `You were 16 before ${age}-${16} year.` :`You are sweet 16`: `You will be after ${16}-${age} year.`
return output2;

// task 
// coding challenge 2, 3
// office open or close 

// type 2 of function :: function expression

var greetings = function(){
    console.log(`hello world`);
    return 1; // not much necessry automaticALLY done by JS ..
}
console.log(greetings());

// example 2 of function expression 

let calcAge = function(birthYear){
    let thisYear = 2023;
    let age = thisYear - birthYear;
    return age;
}

console.log(calcAge(15));