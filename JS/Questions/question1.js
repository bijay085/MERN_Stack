// WAP to check you are eligibe to get a free drink  ::
// must be 18 or above
// must be female to get a free drink 

/* method 1
let age1 = 18;
let gender1 = "F";

if (age1>=18 && gender1 == "F"){
    console.log("You can enter and can get a free drink.")
}
*/

/* method 2
let age = Number(prompt("Enter your age ?"));
let gender = prompt("Whats your gender ? F/M");

if (age >= 18){

    if(gender== "f")
    {
        console.log(`Maam, you can get a free drink.`);
    }
    else{
        console.log(` Sir , you can enter but can't get a free drink.`);
    }
}
else{
    console.log("You cant enter inside club, you are out.");
}
*/

/* method 3 with more condition 
you must be greater than 18 or 
must be owner or 
must be don of the city */

let age =17;
let isOwner = true ;  // boolean value "is"
let isDon = false;

if(age>=18 || isOwner || isDon){
    console.log("You can enter inside the club.");
}

else{
    console.log("You are out.");
}