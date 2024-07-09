//Here is an array having objects as its elements
const data = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Shyam' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Don' },
    { id: 5, name: 'Sita' }
]
//=> WAP to create array of object having odd id.
// [{id:1, name:"Ram"},{id:3,name:"John"}].

console.log(data.filter(e => e.id % 2 !== 0));

//task 2
const products = [
    { id: 1, productName: "Yellow shirt", productPrice: 900 },
    { id: 2, productName: "Red shirt", productPrice: 1900 },
    { id: 3, productName: "Green shirt", productPrice: 2200 },
    { id: 4, productName: "Purple shirt", productPrice: 300 },
    { id: 5, productName: "black shirt", productPrice: 100 }
]
//WAp to create an array of objects having productPrice that ranges from 200 to 600
console.log(products.filter(p => p.productPrice >= 200 && p.productPrice <= 600));

//In the data array add one key value address:"kathmandu" in each object element in 1st task
// console.log(data.map(data.address['kathmandu'])); //=> mistake : another mistake this need to . method cuz it is real life problem
// console.log(data.map(e=>e.address="ktm"));  //=> also mistake cuz it change original array 

console.log(data.map(e => {
    return { ...e, address: "ktm" }
}))

//task 3
const word = 'MISSISSIPI';
//count the words each
// return object : {M:1, I:4, S:4, P:2} : hint we need to use [] cuz this is logical problem not real life
let result = [...word].reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++
    }
    else {
        acc[curr] = 1;
    }
    return acc;
}, {})

console.log(result);



//in function
const countWords = (word) => {
    if (typeof word === 'string'){
        let result = [...word].reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr]++
            }
            else {
                acc[curr] = 1;
            }
            return acc;
        }, {})
    }
    else
        return "It is not a string."
}

console.log(countWords("EYE"))