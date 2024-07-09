//Object:- It is an important non-primitive datatype in Javascript. Objects are special data structure that can hold values in well ordered manner. It can as well hold other complex entities. Objects hold data in key - value pair.
//Syntax: variableType identifier = {key:value, key2:value2, ....,keyN, valueN}

//example object:

const Person = {
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    address: {
        temporary: {
            street: "Koteshwor-32",
            city: "KTM",
            Province: 'Bagmati',
            country: 'Nepal'
        },
        permanent: {
            street: "Bhadrapur-06",
            city: "Jhapa",
            Province: '1',
            country: 'Nepal'
        }
    },
    isMarried: false,
    birthYear: 1998,
    age: (currentYear) => currentYear - Person.birthYear  //this is method : function inside object 
}

//here, firstName is property and age is method.
//John Doe is x years old and He is not married.
//array have only one property i.e .length;

console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === 'M' ? 'He' : 'She'} is ${Person.isMarried ? '' : 'not'} married`)

//Accessing values from an object:
//There are two ways to access value from an object.
//1. Dot Notation
console.log(Person.firstName) // "John"

//2. Bracket Notation
console.log(Person['lastName']) //"Doe"
console.log(Person.address.temporary.Province) //"Bagmati" //dot notation
console.log(Person['address']['permanent']['street']) //"Bhadrapur - 06"

const Nepal = {
    common: "Nepal",
    official: "Federal Democratic Republic of Nepal",
    nativeName: {
        nep: {
            official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
            common: "नेपाल"
        }
    },
    startOfWeek: "sunday",
    capitalInfo: {
        latlng: [
            27.72,
            85.32
        ]
    }

}

//The latitude of नेपाल संघीय लोकतान्त्रिक गणतन्त्र is 27.72 and longitude is 85.32
console.log(`The latitude of ${Nepal.nativeName.nep.official} is ${Nepal.capitalInfo.latlng[0]} and longitude is ${Nepal.capitalInfo.latlng[1]}`);

console.log(`The latitude of ${Nepal['nativeName']['nep']['official']} is ${Nepal['capitalInfo']['latlng'][0]} and longitude is ${Nepal['capitalInfo']['latlng'][1]}`);


//for mobile brand 

const Mobile = {
    brand : "iphone",
    company : "apple",
    model : [
        "pro model",
        "non-pro model",
    ],
    version : [
        "legacy",
        15.0,
        16.0,
        17.0,
        18
    ],
    iphoneName :{
        legacy : {

        }
    }
}


//task this is 

//changing or assigning value in object
//=> chnaging John to Ram
Person.firstName = "Ram";
console.log(Person.firstName);

//=> assigning new value
Person.schoolName = "Mega College";
console.log(Person);

//Nullish Coelscing assignment  : It helps us to assign a variable with null or undefined if it is not already assigned with some (??)
Person.firstName ??= "Hari";
//if the firstName dont exist or not defined in object it will assigned fistName as "Hari" but this is already defined as "Ram" thats why no changes occurs

//although we define "Person" with const, the values are changing because it is reference dataTypes that why the actual value is stored in heap not it memory address, and in memory address only address(reference) is stored 