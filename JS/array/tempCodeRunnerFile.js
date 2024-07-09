// // Array is non-primitive(a non primitive dataType is that where a variable can hold multiple values) dataType. It is a special type of object in js that is used to store multiple similar valued data in a single variable.
// // example 1 ::
// let fruits = ['apple', 'banana', 'cherry', 'guava', 'melon'];
// let years = ['jan', 'feb', 'march', 'april', 'may'];
// let numbers = [1, 2, 3, 4, 5];
// console.log(typeof (fruits));
// console.log(typeof (years));
// console.log(typeof (numbers));

// //mixed array  :: it doesn't make any sense
// let random = ['ram', 'shyam', 1, 2, true, null, 'name', 'game', Symbol(12), 34n, { a: 1, b: 2 }, fruits, years, numbers];
// console.log(typeof (random));
// // The data prresent inside an array are called "elements", and each element has its own index. The index always start from 0.

// // In js Array can be created 
// // i. Array literal 
// // => most common way to make Array
// // variableType identifier = [el1, el2, ....];
// let number = [1, 2, 3, 4, 5, 3, 5, 52, 2];
// console.log(typeof (number));

// // ii. array constructor
// // Sicnce, array is special object in js , it can be created using its constructor .
// // eg ::
// let brands = new Array('Abibas', 'Adidas', 'nike');
// console.log(typeof (brands));
// console.log(brands);

// console.log(fruits[0]);

// //adding elementa in array using index
// let cities = [];
// cities[0] = 'ktm';
// cities[1] = 'bkt';
// cities[2] = 'nwl';
// cities[3] = 'pok';

// // cities[parseInt(cities.length/2)] = 'lol';

// cities[10] = 'london'; //6 array holes are formed whose vlaues are undefined.
// console.log(cities); //output mayb different in browser

// // Array is Special in-built object in JS. So it has many special methods as well. It is one special property. :
// // -> .length
// console.log(cities.length);

// // methods:-
// // When Functions are defined inside object = methods
// //Array methods :::
// // i. ->  indexOf() : RETURN THE INDEX of the element passed as an argument. If the element doesn't exist, it return -1.

// console.log(cities.indexOf('pok')); //3
// console.log(cities.indexOf('neo'));  //-1

// // ii. -> .includes() : check certain elements is inside array or not : returns boolean value
// console.log(cities.includes('pok')); //true
// console.log(cities.includes('neo')); //false

// // ARRAY THATS MUTATES THE ORGINAL MUTATES
// // iii. -> .push() : add element at the end 
// cities.push('secondLast city', 'last city');
// /*let checkReturnedvalueOfPush =  */ console.log(cities.push());  // returns length of new array
// console.log(cities);

// // iv. -> .pop() : remove last element
// /*let checkReturnedvalueOfPop = */ cities.pop();  // this return popped element.
// console.log(cities);

// // v. -> .shift() : remove the 1st element
// arr3 = Array["Bus", "Car", "Airplane"];
// const returValue = arr3.shift();
// console.log(returValue);
// console.log(arr3);

// // vi. -> .unshift() : add the element at 1st
// const returnValue2 = arr3.unshift('kiwi', 'Ram');
// console.log(arr3);

// */-----------------------------------------------------------------------------

// // vii.  -> splice(); This method is used to add, remove or replace elements from any position of the array.This method takes 3 arguments.
// // 1. 1st argument : starting index
// // 2. 2nd arguemnt : count from the starting index
// // 3. 3rd arguement : element to be added/replace

let fruits1 = ['apple', 'melon', 'orange', 'kiwi'];
// removing elements using splice 
fruits1.splice(0, 2); //starts counting from 0, remove 2 elemets from 0
console.log(fruits1);

// replacing the elements using splice 
fruits1.splice(1, 2, 'Grapes', 'Guava'); //leaves 0 index, strart from 1 and replace 2 elements
console.log(fruits1);
console.log(fruits1.splice()); //return remaing arguements in the form of array 

//viii. -> reverse() : 
let fruits2 = ['f1', 'f2', 'fruit', 'guava'];
const returnvalue2 = fruits2.reverse();
console.log(fruits2);
console.log(returnvalue2);

//ix. -> sort() : sorts array in ascending order : use asci value to sort
let alpha = ['a', 'z', 'zebra', 'apple', 'Ball', 'ball']; // Capital letters comes first so while sorting we need to change all elemets in small alphabet then use sort then make it capital
alpha.sort();
console.log(alpha);

// sort in descending order : hint using method chaining
// method chaing :  if the result returns array we can use another method using '.'
alpha.sort().reverse();
console.log(alpha);

let arrNum = [353, 1, 4, 664, 43, 234, 221, 676]; //didnt give expected 1st, it takes all values as string so it will return as : 1,111,123,2,223,4,5 like this 
arrNum.sort();
console.log(arrNum);

// -- callback function / compared function work like :::::
// let check = arrNum.sort((a, b) => console.log(`${a} adnd ${b} are being compared`));
// // "-" gives negative value or positive vaue or zero
// // if output is negative -> a should placed before b
// // if ouput is positive -> a should placed after b
// // zero -> no changes 

// to solve this problem .sort() mathod takes a callback function (specially called compare function) as it argument.
let output = arrNum.sort((a, b) => a - b);
console.log(arrNum);

let output2 = arrNum.sort((a, b) => b - a);   //descending
console.log(arrNum);

let alpha2 = ['a', 'z', 'zebra', 'apple', 'Ball', 'ball', 'cat', 'g']; 
console.log(alpha2.sort((a,b)=> b.localeCompare(a)));  //descending 

// work : Display the reverse of any array by passing data using function 
function Num(arrFunc){
    return arrFunc.sort();
}
console.log(Num(arrFunc=[1,4,6,3,2,111]));

//using arrow function
const Num2 = arrFunc => arrFunc.sort();
console.log(Num2([1, 4, 6, 3, 2, 111]));
console.log(Num2([3,2,4,5,3,234,63,234]));

function fun(){
    for(let i=arr4.legth;i>0;i--){
        return (arr4[i]);
    }
}
fun(arr4 = [1,4,2,10,5]);





