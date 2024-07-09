let arr1 = [1, 2, 3];
let arr2 = arr1;  //this copy refernced address not actual value 

arr2.push(4);
console.log(arr1);
console.log(arr2);
// call stack ----- heap 

// Solution to solve this problem 
// 1. let arr2 = [...arr1];  // ... = spread operator