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

let alpha23 = ['a', 'z', 'zebra', 'apple', 'Ball', 'ball', 'cat', 'g'];
console.log(alpha2.sort((a, b) => b.localeCompare(a)));  //descending 

// work : Display the reverse of any array by passing data using function  without sorting

function fun(arr4) {

    for (let i = arr4.length - 1; i >= 0; i--) {
        console.log(arr4[i]);
    }
}
fun([1, 4, 2, 10, 5]);
fun([100, 200, 500, 1, 4, 2, 4, 3, 9, 5]);
// fun(["a","r","v","b","s"]);


console.log("with sorting now");


// work : Display the reverse of any array by passing data using function  with sorting
function fun(arr5) {
    arr5.sort(function (a, b) {
        return a - b;
    });

    for (let i = arr5.length - 1; i >= 0; i--) {
        console.log(arr5[i]);
    }
}
fun([1, 4, 2, 10, 5]);
fun([100, 200, 500, 1, 4, 2, 4, 3, 9, 5]);
// fun(["a","r","v","b","s"]);

// doesnt support alphabet so :
let exampleArray = [
    { name: "Ram", id: 1, position: "Thapa" },
    { name: "Shyam", id: 1, position: "Rana" },
    { name: "Hari", id: 1, position: "Magar" },
    { name: "Sita", id: 1, position: "Dagar" }
]

//create a function that takes an array and return last element of that array

function func(a) {
    return (a.length - 1);
}
func(["a", "f", "d", 2]);
func(["k", "j", 4, "g"]);

// or
const funLastEl = arr => arr[arr.length - 1];
funLastEl(["k", "j", 4, "g"]);

//methods that dont make any changes to original array
// 1. .slice() -> use to take a portion of any array. It doesnt mutates the original array rather it creates a shallow copy of the array.It takes two arguments :
// i. starting index
// ii. end index (does not include the final element of the count ) 

arrSpli = ["guava", "kiwi", 1, 5, "game", "dude", "lio", "vvi"];

console.log(arrSpli.slice(2, 4)); //1-5 , it must be game too but last index is not counted 
console.log(arrSpli);

// 2.  .concat() -> used to join two arrays
let a = [1, 3, 4];
let b = ["a", "f"];

console.log(a.concat(b));
console.log(a);
console.log(b);

// 3.  spread operator(...) : this operator is used to copy elements of one array to another array without chaging original array 

let toy = ["cat", "bat", 'mat', "that", "holy crap"];
let hobbies = ['game', "time", "Lio"];

let arrayMadeBySpreadOperator = [...hobbies, ...toy];
console.log(arrayMadeBySpreadOperator);
console.log(toy);
console.log(hobbies);

let arr6 = [0, 1, [2, 3]];
let x = [...arr6, ...toy, 112, 123];
console.log(x); // output will contain [0,1,[2,3],'cat,'bat'...112,123] cuz it takes [2,3] as single unit 
console.log(arr6);

// create a function takes array of numbers and return the sum of those numbers
// sumOfNumber([1,2,3]) //6

let sumNum = 0;
function funSum(n) {
    if (n.includes("A-Z" || "a-z")) {
        console.log("no");
    }
    else {
        for (let i = 0; i < n.length; i++) {
            sumNum = sumNum + n[i];
        }
        return sumNum;
    }
}
console.log(funSum([1, 2, 3, 'A']));
/*
Important in JS 
i. MAP -> This method is used to iterate over the array and change the value of each element present in array. This method doesn't mutates the original array. This method has a call back function with three arguments and that callback function has 3 parameters :

1st --> element 
2nd --> index of that element 
3rd --> array itself

syntax : array.map(function(el, i, arr){

})

in arrow function 
syntax :   array.map(() => {})

*/

/*
//copy the array and double it and display new array :: [2,4,6,8,10,12]
let nums = [1, 2, 3, 4, 5, 6];
function fua(nums2) {
    for (let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }
}
console.log(fua(nums));
*/

//using map method 
let nums = [1, 2, 3, 4, 5, 6];

// let doubledNums = nums.map((e,i,arr)=>{
//     // return e*2;  we dont need this for single line output 
// })
let doubledNums = nums.map(e => e * 2)
// return e*2;  we dont need this for single line output 
console.log(doubledNums);
console.log(nums);

//[0,2,6,12,20,30] :: example 2 output needed using above array
// let newNums = nums.map((e,i) =>{
//     return e*i;
// })
// console.log(newNums);
// in short 
const newNums = nums.map((e, i) => e * i)
console.log(newNums);


// example 3 : A company offered 15% increment in salary for its employee

let salary2080 = [17000, 2500, 1, 0];
const newSalary2080 = salary2080.map((e, i) => e + e * 0.15) //e*1.15 also i is not needed here 
console.log(newSalary2080);

// example 4 :  sort in ascending order , then in output : ['Roll No.:1 Ajay','Roll No.:2 Bibek']
let students = ['Sandip', 'kaushal', 'kp', 'Ramesh', 'Suresh', 'Color', 'Bibek', 'Khersari', 'Ajay']

const stu = students.sort().map((e, i) => `Roll No.:${i + 1} ${e}`);  // we can chain another method too , but if at last we do .push("Hello") then it will return length not array so then we can't use method chain again.
console.log(stu);
console.log(students);

//task 5 :  Ktm temperaure (deg Celsius) this week has been 
let KtmTempInCel = [17, 104, 10, 12, 0]
//convert into fahren
const KtmTempInFahr = KtmTempInCel.map((e, i) => (e * 1.8) + 32);
console.log(KtmTempInFahr);

/*
i. FILTER method :
syntax : Array.filter((element, index, arr)=> {return condition;});

In the call back function of this method a condition is initialized and based on the condition the elemets are added (filtered) in the new array returned by this method
If the condition is true element is added and if condition is false the element wont be added
*/

//print < 5 
let numbers = [10, 4, 53, 2, 1, 343, 2, 34, 83, 365, 343, 0, 5, 2, 4, 1];
let filteredNumber = numbers.filter(el => el < 5);
console.log(filteredNumber);

let oddNumber = numbers.filter(el => el % 2 != 0);
console.log(oddNumber);

let evenIndexedNumber = numbers.filter((el, i) => i % 2 === 0)     //el is not being used but can't write i, if we do it will take i as element so we can use "_"
console.log(evenIndexedNumber);

let salaries = [17000, 12320, 543654, 124, 34540, 83786, 6324, 9383, 47289, 10000];

// task : The government had defined the minimum salary as 17500, find out how many people from survey are getting below average salary.

let salaryBelowAverage = salaries.filter(el => el < 17500);
console.log(`Out of ${salaries.length} the salary less than 17500 is ${salaryBelowAverage.length}`);

//find out how much salary is less in %  use filter than map
let lessPercent = salaries.filter(el => el < 17500).map(el => `${el} is ${(100 - (el / 17500 * 100)).toFixed(2)}% less than minimum salary`);

console.log(lessPercent);

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

/*
----------------------**Reduce method**-------------------------------------------------
It is the method of that can return any type of value. (Either primitive or non primitive ). It will reduce all elements in and array into single value.
Unlike map and filter this method has 2 arguments.
1st -> callback function
2nd -> initial value of accumulator

The callback function in this method has four parameters ::
1st -> accumulator
2nd -> current element
3rd -> index
4th -> array 
*/
//task 1 : summing all elements 
let num1 = [10, 3, 4, 5, 43, 4, 5, 3];
let sum = 0;
for (i = 0; i < num1.length; i++) {
    sum = sum + num1[i];
};
console.log(sum);

//array data type x, tara haami lai chahi array as a output chahiyeko xaena then we use reduce
// let output1 = num1.reduce((acc, el, i, arr)=> {
//     acc += el;
//     return acc;
// },0)
//here we dont need i and arr here so 

let output1 = num1.reduce((acc, el) => acc + el, 0);
console.log(output1);

// 1st iteration : acc = 0, el =10, 0+10 = 10;
// 2nd iteration : acc = 10, el = 3, 10+3 = 13;
// 3rd iteration : acc = 13, el = 4, 13 + 4 = 17;

let salary1 = [175000, 17000, 12320, 543654, 124, 34540, 83786, 6324, 9383, 47289, 10000];
//find average salary

// let averageSalary = salary1.reduce((acc,currEl,i,arr) => (acc + currEl)/arr.length);
// console.log(averageSalary);
// //acc = 0, currEl = 17000, (0+17000)/20;    

// => this is wrong 

let averageSalary = salary1.reduce((acc, currEl) => acc + currEl) / salary1.length;
console.log(averageSalary);

// task : The government had defined the minimum salary as 17500, find out how many people from survey are getting below average salary.
// find out how much salary is less in %  

// let salary1 = [175000, 17000, 12320, 543654, 124, 34540, 83786, 6324, 9383, 47289, 10000];
let PercSalary = salary1.reduce((acc, curr) => {
    if (curr < 17500) {
        let percentDiff = 100 - (curr / 17500 * 100);
        acc.push(`${curr} is ${percentDiff.toFixed(2)}% less than minimum salary`)
    }
    return acc;
}, []);

console.log(PercSalary);

//create a function that takes two parameter, word and letter respectvely. The function should return the count letter present in the word.

// eg : output = letterCount('apple', 'p) -> There are 2 p in apple.
// hint : convert word into array (use of spread operator)

/*
const letterCount = (word, letters)=> {
let count = letterCount.reduce((acc, curr,) => {
    if (  curr.toLowerCase() === curr.toLowerCase()) {
        acc++;
    }
    return acc;
},0);
return `There ${count ===1 ? 'is':'are'} ${count} ${letters}${count!==1 ?  '1`s' : '' } in the word ${word}`;
}
console.log(count("element","e"));
*/


/*
array to string 3 ways (array methods)
i. spread operator 
*/
let ArrName = [1,2,32,'bijay'];
let arrIntoString = [...ArrName];

/*
ii. split method ; There are 2 arguments. This is string method.
1st -> 
2nd -> Count
*/
let stringName = 'Hello Wolrd !';
let arrString = stringName.split(' '); //space is used //we can also give nothing '', it will give all elemets differnetly 
console.log(arrString);

// iii. array.from
let arrName = 'Name';
let abc = Array.from(arrName);
console.log(abc);

/*Array destructuring:
=> It is a way to sequentially assign values from arrays to varaibles.
*/
// eg 1:
let [w,y,z] = [1,2,3] ; // w=1, y=2, z = 3

//Rest parameters
let [m,n,o, ...others] = [83,43,33,23,65,76];
console.log(m,n,o,others);  //output : 83 43 33 [ 23, 65, 76 ]

// Left hand side (rest parameter): Right hand side (spread operator)
>>>>>>> 892e2a49028524cd7730197676b1484a26b215a7




