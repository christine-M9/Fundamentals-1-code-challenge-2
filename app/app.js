// Question1 :storing both Mark's and John's weight and height in a variable 
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

//  Question2: Calculating mark's BMI's
let marksBMI = markWeight1 / (markHeight1 * markHeight1);
console.log(marksBMI);
let marksBMI2 = markWeight2 / (markHeight2 * markHeight2);
console.log(marksBMI2);
// John's BMI
let johnsBMI = johnWeight1 / (johnHeight1 * johnHeight1);
console.log(johnsBMI);
let johnsBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(johnsBMI2);

// Question 3: Boolean variable whether Marks BMI is higher than Johns
let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI); 

// code challenge 2.....(you can decide to use if else too)
console.log(`Mark's BMI is higher than John's BMI `);
console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}`)