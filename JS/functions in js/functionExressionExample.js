let calcAge = function(birthYear){
    let thisYear = 2023;
    let age = thisYear - birthYear;
    return (age);
}

console.log(calcAge(2003))

//example 2 
let whenYouWillBe16 = function(age){
    let output2 = (age >= 16) ? (age > 16) ? `You were 16 before ${age-16} year.` :`You are sweet 16`: `You will be after ${16-age} year.`
    return output2;
}

console.log(whenYouWillBe16(89))
