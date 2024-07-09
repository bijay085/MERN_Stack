/*
Switch case : The swtich statement is used to perform different actions based on the value of a variable.

Syntax ::

Switch (value{
    case value1:
        //Statement to be executed ;
        break;

    case Value2:
        //Statement to be executed;
        break;

    case ValueN:
        //Statement to be executed;
        break;

    default:
        //Statement to be executed if none of the above condition statisfy;

}
*/

// Example of traffic light 
let currentLight = "red";

switch (currentLight){
    case 'green':
        console.log("Go");
        break;

    case 'yellow' :
        console.log("Slow down");
        break;
    
    case 'red':
        console.log("Stop");
        break;
    
    default:
        console.log("Invalid color");
}

/*
Example 2 : WAP using swtich case to find GPA 
90-100 :: A+
80-89 :: A
70-79 :: B+
60-69 :: B
50-59 :: C+
Else :: F

*/

let totalMark = 500;
let obtainedMark = 350;

let percentage = (obtainedMark/totalMark)*100;

// switch(percentage){ 
    //     case (percentage>90 && percentage<100):
    //         console.log("A+");
    //         break;
    
/*This is wrong beacuse :
    //     case (percentage>90 && percentage<100): this provide true and false so,
// switch(percentage) :: here there must be true or false instaed of percentage. :: value of a variable.
*/

switch(true){
    
    case (percentage>=90 && percentage<=100):
        console.log("A+");
        break;

    case (percentage>=80 && percentage<89):
        console.log("A");
        break;

    case (percentage>=70 && percentage<79):
        console.log("B+");
        break;

    case (percentage>=60 && percentage<69):
        console.log("B");
        break;

    case (percentage>=50 && percentage<59):
        console.log("C+");
        break;

    case (percentage>0 && percentage<49):
        console.log("F");
        break;

    default:
        console.log("Invalid mark");
        break;

}
