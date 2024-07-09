//Object Coding Challenge #1
// Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
// this object should also have method for fund deposit, fund withdrawal and fund Check.

// Incase of fund deposit:
// Step: add amount that has been deposited with the current balance and show message

// Incase of fund withdrawal:
// Step1: Check if there's sufficient balance in the account
// Step2: If there's sufficient balance then deduct amount from currentBalance and show message.
// If there's no sufficient balance just show the message

/*
    const myAccount = {
    first_name : "Tony",
    lastName : "Stark",
    account_number : 47983,
    currentBalance: 100,

    fundDeposite : (amtDeposite) =>  console.log(`${amtDeposite}  has been deposited in your account ${first_Name} ${lastName} sir. Now your total balance is eval(${amtDeposite} + ${currentBalance})`),

    fundWithdrawal : (amtWithdraw) => currentBalance>amtWithdraw ? console.log(`${amtWithdraw}  has been withdrawn from your account ${first_Name} ${lastName} sir. Now your total balance is eval( ${currentBalance} - ${amtDeposite} )`) : console.log(`You don't have ${amtWithdraw} balace.`),

    fundCheck : () =>  console.log(`You have ${currentBalance} in this ${accountNo}.`)
    }



// myAccount.fundDeposite(100);
// myAccount.fundWithdrawal(1000);
myAccount.fundCheck();


*/

//Question for jr. dev
//question in array but output in array : so reduce is only one which can do that 
const students = [
    {id:1, name:'John', score:[90,80,77]},
    {id:2, name:'Ram', score:[97,85,70]},
    {id:3, name:'Sita', score:[90,90,77]},
    {id:4, name:'Laxman', score:[71,70,69]},
    {id:5, name:'Shyam', score:[70,80,77]},
]
// { John: 81.382892, Ram: 85.3783939, Sita:83.789393, Laxman:70.3738439, Shyam:81.789393 }
// another paramter = {}cuz we want output as in object

const average = students.reduce((acc, student)=>{
    const avgScore = student.score.reduce((acc, curr)=>acc + curr )/student.score.length
    acc[student.name] = avgScore
    return acc
}, {})

console.log(average);

//another question
const data = [
    {book:"Book1", author:"Author1"},
    {book:"Book2", author:"Author2"},
    {book:"Book3", author:"Author1"},
    {book:"Book4", author:"Author3"},
    {book:"Book5", author:"Author2"},
    {book:"Book6", author:"Author3"},
]
// {Author1:2, Author2:2, Author3:2}
const countBook = data.reduce((acc, curr)=>{
    if(curr.author==acc){
        curr.author++;
    }
    else{
        curr.author;
    }
    acc[curr.book] = curr.author
    return acc
}, {})

console.log(countBook);