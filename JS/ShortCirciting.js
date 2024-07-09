//Short circuting using logical operators in js 

/*
==> It is the practice to write code to get requied result based on behaviour shown by logical operators.
We use short circuting to reduce the lines of codes .
Programing principle : KISS :: Keep it short and simple.

1.  Short circuting using "AND" operator :
*/
let age = 87;

if (age >= 18){
    console.log("You can vote.");
}

else{
    //do nothing;
}

// the below code is short circuted code. 
age >= 18 && console.log("You can vote....");



// 2. Short circuting using "OR" operator :

// how default username is given in game 
let firstName = "Ram";
let lastName = "Umang";
let username;


/*
//displaying username in scren 
if(username){
    document.write(`Welcome ${username}`)
}
else{
    document.write(`Welcome ${firstName}Guest${Date.now()}`);   //template literal :: ` `
}

// now the short circuted code ::

username = username || `${firstName}Guest${Date.now()}`;
document.write(`Welcome ${username}`)
*/


//------------------------------ Guard clause ------------------------------------
if(!username){
    username = prompt("Please enter your username:");
}
document.write(`Welcome @${username}`);