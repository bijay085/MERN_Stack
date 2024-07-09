
function bankAccount(firstName,lastName,accountNo,currentBalance) {
    this.first_name = firstName,
    this.lastName = lastName,
    this.account_number = accountNo,
    this.currentBalance= currentBalance,
    this.fundDeposite = (amtDeposite) =>  console.log(`${amtDeposite}  has been deposited in your account ${firstName} ${lastName} sir. Now your total balance is eval(${amtDeposite} + ${currentBalance})`),

    this.fundWithdrawal = (amtWithdraw) => currentBalance>amtWithdraw ? console.log(`${amtWithdraw}  has been withdrawn from your account ${firstName} ${lastName} sir. Now your total balance is eval( ${currentBalance} - ${amtDeposite} )`) : console.log(`You don't have ${amtWithdraw} balace.`),

    this.fundCheck = () =>  console.log(`You have ${currentBalance} in this ${accountNo}.`)
    }

    const myAccount = ("Tony","Stark",83886,200); 
    console.log(myAccount);
    // myAccount.fundDeposite(100);
    // myAccount.fundWithdrawal(1000);
    // myAccount.fundCheck();

    



    // ------------
    const bankAccount = (firstName,lastName,accountNo,currentBalance,amt,amtWithdraw) => {
        return{
        first_name : firstName,
        lastName : lastName,
        account_number : accountNo,
        currentBalance: currentBalance,
    
        fundDeposite : () =>  console.log(`${amtDeposite}  has been deposited in your account ${firstName} ${lastName} sir. Now your total balance is eval(${amtDeposite} + ${currentBalance})`),
    
        fundWithdrawal : () => currentBalance>amtWithdraw ? console.log(`${amtWithdraw}  has been withdrawn from your account ${firstName} ${lastName} sir. Now your total balance is eval( ${currentBalance} - ${amtDeposite} )`) : console.log(`You don't have ${amtWithdraw} balace.`),
    
        fundCheck : () =>  console.log(`You have ${currentBalance} in this ${accountNo}.`)
        }
    }
    
    const myAccount = ("Tony","Stark",83886,200); 
    console.log(myAccount);
    // myAccount.fundDeposite(100);
    // myAccount.fundWithdrawal();
    myAccount.fundCheck();
