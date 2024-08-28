// import modules
const fs = require("fs");
const math = require("../math.js");

// Import and Export :

// console.log(math);
const sum = math.addition(50, 20);
console.log(sum); // 70

const sub = math.subtraction(30, 10);
console.log(sub); //20

const mul = math.multiplication(12, 5);
console.log(mul); //60

const div = math.division(100, 20);
console.log(div); //5

fs.appendFileSync("data.txt", `The addition: ${sum} \n`);
fs.appendFileSync("data.txt", `The subtraction: ${sub} \n`);
fs.appendFileSync("data.txt", `The multiplication: ${mul} \n`);
fs.appendFileSync("data.txt", `The Division: ${div} \n`);
