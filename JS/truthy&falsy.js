//imp topic

/*
There are 7 falsy value in js, they are : 0, -0, 0n, false, undifined, null NaN, "".
Except these values all other values as Truthy values.
*/

if(0){
    console.log("The value is empty.");
}
else{
    console.log("The value is falsy.");
}

("Ram" && 100 && "true" && NaN);   // output : NaN :: cut it is not a boolran expression and NaN is at last and "and" operator returns last value.

console.log("Ram" && 100 && "true" && NaN && 77 && "sita" && 999);  //NaN output :: it is false value and "and" operator search for false / negative value.

console.log("Ram" && 100 && "true" && 77 && "sita" && 999);  //999 output :: there is no false value and show the last value "and" operator search for false / negative value.


("Ram" || 100 ); // 'Ram'
("Ram" || 100 || "Sita"); //'Ram'
(-1 || NaN || 0); // -1 is truthy value in programming