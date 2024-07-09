//day 4

/* DataType refers to what kind/type of value a variable can hold. 
Since js is dynamically typed language, the type of value hold by a varible can changed during runtime.

let n = "Ram";
n = 19 ; We can assign interger value in that variable where string or other data type was stored.
----------------------------------------------------------------------------------------------------------

* 2 types of js data type :

A. Primitive  :: hold a value directly within their varaible and do not need to be referenced by another object.
=> 7 types of primitive datatype :

1. Number :- int , double, float */
let num1 = 10;
let num2 = 19.34;
let num3 = 10;
console.log(num1 === num3);

// 2. String :-
let fname = "Ram";
let lname = 'Karup';
let me = `ops`;  //backtick

// 3. Boolean :-
let isMarried = true;
let hasChild = false;

// 4. Undefined  :- variable declare gareko x tara value k rakhny nai tha xaena
// => If a variable is declared and value is not assigned then at that time it holds undefined datatype 
let Lname;
let nationality = undefined;

// 5. Null :- Variable declared gareko x , k rakhny pani tha x , tara value xaena 
let age = null;

// 6. Symbol() :-
let id = Symbol(2);
let anotherId = Symbol(2);
console.log(id === anotherId);
console.log(typeof (id));

// 7. Big int :- number with larger range 
let num12 = 10n;

/*
B. Non Primitive(Referenced Datatypes)  :: do not hold a value directly within their variable and need to be referenced by another object. */


// 1. Array 
let x = [1, 2, 5];
console.log(typeof x);

// 2. Object 
let obj1 = {
    a: 1,
    b: 2,
}

