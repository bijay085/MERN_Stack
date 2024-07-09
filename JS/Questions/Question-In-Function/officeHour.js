/* WAP to check whether Office is opened or closed. Conditions are :
Office time : 6 to 10 (while defining varaible for it keep time in 24hrs format for simplicicty)
Office is closed in weekend
Office is closed in holidays
*/

let time, isWeekend, isHolidays;
function officeCheck(time, isWeekend, isHolidays){
    let output = (time>=6 && time <= 10 && !isWeekend && !isHolidays) ? `Office is open` : `Office is closed`;
    return output;
}

console.log(officeCheck(1,true,false));
console.log(officeCheck(10,true,false));
console.log(officeCheck(2,false,true));
console.log(officeCheck(7,false,true));
console.log(officeCheck(9,false,false));
console.log(officeCheck(12,false,false));
console.log(officeCheck(7,true,true));