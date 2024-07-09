/* WAP to check whether Nepal Mega BCA is opened or closed. Conditions are :
College time : 6 to 10 (while defining varaible for it keep time in 24hrs format for simplicicty)
College is closed in weekend
College is closed in holidays
*/

// let time = +prompt("Enter the time");
// let isWeekend = prompt("Is it weekend ? : T/F");
// let isHoliday = prompt("Is it holdiay ? : Y/N");

// DRY principle : do not repeat your code 

let time = 7;
let isWeekend = false;
let isHoliday = true;

if(time >=6 && time<=10 && isHoliday==false && isWeekend==false){
        document.write("Open");
    }
else{
    document.write("Close");
}

// Dont use nested if else 

if(time >=6 && time<=10 && !isHoliday && !isWeekend){
        document.write("Open");
    }
else{
    document.write("Close");
}

//when closed is prioritized
if(time>10 || time <6 || isHoliday || isWeekend){
        document.write("Closed");
    }
else{
    document.write("Open");
}


