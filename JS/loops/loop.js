/*
There are 3 types of loops :

1. for loops
=> It is the type of loop that is used when the number of iteration is known in advance.

syntax 
for (initialization; condition; increment/decrement ){
    //statment to be executed when condition is true 
}

example to print "Hello word" 10 time::
*/
/*---------------------------------
for(let i = 0; i<10; i++){
    console.log(`Hello world ${i}`);
}

// ------example to print 20 to 1;

for(let j=20; j>=0; j--){
    console.log(j)
}

//-------example to print first even numbers upto 20
for(let e = 2; e<=20; e+=2){
    console.log(e);
}    

// ----1 is odd it is not divisible by 2 ... upto 20 also even

for(let a = 1; a<=20; a++){
    const isEven = a%2 == 0
    console.log(`${a} is ${isEven ? 'even':'odd'} because it ${isEven? 'is':'is not'} divisible by 2.`)
}

//---question :: create function that takes a number and give its multiplication table upto 10

const mul = (number,upto) => {
    for(m=1; m<=upto; m++){
        console.log(`${number} X ${m} = ${number*m}`);
    }
}
mul(2,9);
mul(5,50);

const name = "Bijay ";
console.log(name.length);

// 2. while loop 
// =>It is type of loop that is used when the number of iteration are unknown beforehand.

/*
syntax ::
while(condition){
    // statement to be executed while condition is true;
}
*/

// example 1 : first 20 Number 
// let b=1;
// while(b<=20){
//     console.log(b);
//     b++;   
// }


//example 2 : first all even upto 20
let c=2;
while(c<=20){
    console.log(c)
    c+=2;
}
// example 3: using short circuting using and "&&" operator for odd number
let d = 1;
while(d<=20){
    d % 2 !=0 && console.log(d);
    d++;
}

// example 4: was to print 1 is odd ... and 2 is even ...
let e = 1;
while(e<=20){
    const isEvenn = e % 2 === 0; 
    console.log(`${e} is ${isEvenn ? 'even':'odd'} because it is ${isEvenn? '':'not'} divisible by 2.`)
    e++;
}

// Infinite while loop : happen whenever condition is true always 
let f = 1;
while(f<=20){
    f % 2 !=0 && console.log(f);
    // f++;
}

// 3. do while loop 