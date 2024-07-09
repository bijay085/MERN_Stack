//operators -- day 5

//defination : Operators are pre-defined sign and symbol that are designed to perform designated operations on operand 

// Types of operators :
/*
----------------------------------------------------------------------------------------------------------
//===========> 1. Arithemetic operators
a. addition (+)
b. subtraction (-)
c. multiplication (*)
d. division (/)
e. modulo (%)
f. exponential (**) 
g. concat (+)
----------------------------------------------------------------------------------------------------------
*/

/*
//  a. addition (+)
 let num1 = 4;
 let num2 = 5;
 console.log(num1 + num2);

//  b. subtraction (-)
console.log(num1 - num2);

//  c. multiplication (*)
console.log(num1 * num2);

//  d. division (/)
console.log(num1 / num2);

//  e. modulo (%)
console.log(num1 % num2);

// f. exponential (**) 
 console.log(num1 ** num2);

//  g. concat (+)
console.log("ME" + "Ghost");
*/

/*
----------------------------------------------------------------------------------------------------------
//===========>2. Comparison (Relational) operators
a. greater than (>)
b. less than (<)
c. greater than equal to (>=)
d. less than equal to (<=)
e. loose equals to (==)  :: value mtra check grx data types does not matter
f. strict equals to (===)  :: check value and data type too , both most match
g. not equal to (!=)
----------------------------------------------------------------------------------------------------------
*/

/*
console.log (6 == 6) ;
console.log (6 == "6");
console.log(6===6)
console.log (6 === "6");
console.log (6 != 6);
console.log (6!= "6");
console.log (5 != 9);
console.log (3!= "9");
*/

/*
----------------------------------------------------------------------------------------------------------
////===========> 3. Assignment operators : used to assign value to a variable 
a. equals to (=)
b. arthimetic assignment operator 
    eg : variable += 4 :: variable = variable + 4
    eg : a -= 6; :: a = a -6
    eg : a*=7;
    eg : a /= 4;
    eg : a **= 5;
    eg : a %= 1;
----------------------------------------------------------------------------------------------------------
*/

/*
----------------------------------------------------------------------------------------------------------
// 4. Logical operators :: boolean expression haru lai combine grnu paryo vane 

a. logical and (&&)  :: it combine two or more boolean values and expression and returns true if all of them is true and false if at least one of them are flase.
f && f && f = f
t && t && f = f
t && t && t = t

b. logical or (||)  :: it combine two or more boolean values and expression and returns true if at least one of them are true and returns false if all of them are false.
f || f || f = f
t || t || f = t
t || t || t = t

==> increament , deacrement , type of () all are unary opertor.

c. logical not (!) :: It is a unary logical operator that inerts the boolean value or expressions.
!t = f
!f = t
----------------------------------------------------------------------------------------------------------
*/

/*
console.log(9>=10 && 5>=5 && true && 3>10); //false 
console.log((9>=10 || 5>=5 || false || 3>10)); //true

// In JS operators like ( and  or ) do traversing , so if they is ( true && true && true && true ) :: the output will be true :: and this true is from last equation. 
*/

/*
// 5. Special operatos 
---------------------------------------------------------------------------------------------------

a. Ternary operator : Short hand operator used insated of if-else statement.
syntax :  condition ? run if condition is true : run if condition is false
example ::  it is used when there is only one statement to print or run
*/
let age = 19;
age >= 18 ? console.log("You can drive") : console.log("You cant drive");
// expression = combinaton of opereands and operators :: expression can be assigned to variable but statement cannot. :: x = a+ b; :: if else statement cannot be stored in a variable

// example 2 
let message = age >=20 ? "You can enter the club." : "You cant enter in club.";
console.log(message);

/*
---------------------------------------------------------------------------------------------------
b. Nested ternary operator 
Syntax : condition ? condition ? "true statement" : "false statement" : "statement if initial condition is false";
---------------------------------------------------------------------------------------------------
(not recommended :: less readability)
*/
let isFemale = true;
let message2 = (age>=18) ? (isFemale) ? "Can get a free drink": "Can enter but no free drink" : "can't enter in club";
console.log(message2);

/*
---------------------------------------------------------------------------------------------------
// c. Nullish Coelscing Operator : If LHS  value or expression is null or undefined, then RHS will be executed. 
---------------------------------------------------------------------------------------------------
*/

let username;
username ?? console.log("Please enter your username.");

// if the LHS value is not "Null or undefined" then RHS code wont be execeuted 


let username1 = "bsisn";
username1 ?? console.log("Please enter your username1 .");

/*
---------------------------------------------------------------------------------------------------
d. Unary operator : Those operators which can carry out operations on single operands are called unary operators.

i. Increment Operator(++) : Increase value by 1
ii. Decrement Operator (--) : Decrease value by 1
iii. Unary + : used in prompt
iv. Unary - or Negation Oerator
v. typeOf Operator

*/

// Unary + example 
let x = -5;
console.log(+x);

//Unary - or negation operator 
console.log(-x);

// typeOf operator
console.log(typeof NaN);

//POSTFIX (x++) and PREFIX (++x) :

let a = 7;
let y = a++ ; //y = 7 , then operator work : a = 8
console.log(a);  //a = 8
console.log(y);  //y = 7

let b = 7;
let c = ++b ; // b = 8 , then assigned work : a = 8
console.log(b);  //b = 8
console.log(c);  //c = 8

let m = 7;

console.log(m++);  // 1st console done (m=7) the  ++ is done (m=8)
console.log(++m); //increment is done(m=9) then printed
console.log(m); //m = 9

// task : Nullish Coelscing Operator read 



