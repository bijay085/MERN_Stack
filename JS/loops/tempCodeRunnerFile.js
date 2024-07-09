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
// for(let i = 0; i<10; i++){
//     console.log(`Hello world ${i}`);
// }

// // ------example to print 20 to 1;

// for(let j=20; j>=0; j--){
//     console.log(j)
// }

// //-------example to print first even numbers upto 20
// for(let e = 2; e<=20; e+=2){
//     console.log(e);
// }    

//----1 is odd it is not divisible by 2 ... upto 20 also even

for(let a = 1; a<=20; a++){
    output = a/2 == 0 ? `${a} is even because it is divisble by 2`:`${a} is odd because it is not divible by 2`;
    console.log(output);
}
// 2. while loop
// 3. do while loop 