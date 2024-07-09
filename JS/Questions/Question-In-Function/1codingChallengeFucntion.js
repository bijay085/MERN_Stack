// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK
// -------------------------------------------
// #Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//3.Finally, Use Ternary operator to display the output
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
// GOOD LUCK

let mass1, mass2, height1, height2, bmi1, bmi2 ;

function BMICalculator(mass1, height1, mass2, height2){
    //calculating BMI 
    bmi1 = (mass1/height1**2);
    bmi2 = (mass2/height2**2);

    // comparing bm1 and bmi2 
    let ishigherBMI1 = (bmi1 > bmi2) ? `BMI-1 (${bmi1.toFixed(2)})  is higher than BMI-2 (${bmi2.toFixed(2)}) !` : `BMI-2 (${bmi2.toFixed(2)}) is higher than BMI-1 (${bmi1.toFixed(2)})  !`;
    return (ishigherBMI1);
}

console.log(BMICalculator(78,1.69,92,1.95));
console.log(BMICalculator(95,1.88,85,1.76));
