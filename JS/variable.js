// variable : concept in programming where data's values are store and also helps to manipulate 
// defn : Value = singular data 
// defn : expn = group of data 

let x = 5;
let y = 10;
let sum = x + y;    //variable also can store expression x+y is a expression which at last provide a value 

console.log(sum);

/* 
There are 3 ways to declare variable :
1. var      (Pre-ES6)  :: old way to declare 
2. let      (ES6+)
3. const    (ES6+)
*/

// variable_name is also knows as identifier 
/* rules for delcaring identifier 
1. always start with underscore, dollar sign or letters. Others are not used
2. case sensitive 
3. do not use keyword or reserved word
4. no space between 2 or more words */

/* standard convension for indentifier in JS 
1. camelCase must be used :: var myName
2. while creating object Pascalcase :: var Myname 
3. meaningfull, descriptive and relevant to data stored :: let myName = "bijay koirala" */

// JS is backward compatible language.
// Backward compatible language means old features remains same + new features added . So old website use old method that is var thats why we need to have concept about it .

/* var vs let vs const

----------------------------------------------------------------------------------------------------------
1. var = var is used to declare which value can or may change overtime in our program.
 for eg:
  var age = 15;
  var age = 20 ; Age value is chaged to 20 

2. let = same like var :: used to declare which value can or may change overtime in our program.
 for eg:
  let age = 15;
  age = age + 5;

3. const = whose value does not change. 
 for eg:
  const pi = 14.666 ;
----------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------
4. We can't declare all Variables in only in const but can be in var or in let.
 for eg :
  var firstname; :: valid
  let lastname;  :: valid 
 --- const address ;  :: invalid  
  const address = "Nawalpur";
----------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------
5. Variable redeclaration is not possible in let and const. 

6. Variable declared with const are not hoisted.
=> Hoisting is the default behaviour of jS which raise the variable declared with var and function declaration to the top of its scope. 
Hoisting is bad. Automatic variable declaration is bad .

6. Var is function scoped.
7. let and const is block scoped.

----------------------------------------------------------------------------------------------------------

*/

// --hoisted 
// varaible declared with var are hoisted :: meaning the value declared with var not the value is taken to top 

// var address1;   done by interpeter 
console.log(address1);  //undefined
var address1 = "Kathmandu";
console.log(address1); //kathmandu

// varaible declared with var are not hoisted
console.log(address2);  //reference error
let address2 = "Nepal";
console.log(address2); //Nepal


var firstName;  //variable declaration
firstName = "Bijay"; //value assignment or initailzation

//--------------------------------------------------------------------------------------------------------


/*  CHARCTERSTICs of variable in JS :
a. Mutabiltiy   :: var and let are immutable variable.
b. Scope 

Scope :- It is the region where the variable os declared.
There are 2 types of scope :
  i. Global scope
  ii. Local scope 
    1. function scope  :: var is function scope
    3. block scope     :: let and const is block scope
=>  {...The region inside the curly braces except function is block scope..}

----------------------------------------------------------------------------------------------------------

      if(true){
        let j = 10;
        console.log(j);      value :: 10
      }
        console.log(j);     value :: error  outside block no access.
----------------------------------------------------------------------------------------------------------

        function scope :
        function test(){
          var y=10;
          console.log(y);   :: 10
        }
      test();
      console.log(y);  :: undefined .


var x=10;
x=5 ;     the value of x is mutated / changed . 

*/