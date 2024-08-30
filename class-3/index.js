// Import modules
const fs = require("fs");
const math = require("./math.js");

// CRUD Operation:
// Create
// Read
// Update
// Delete

// Asynchronous Operation:

//Create
// fs.writeFile("data.txt", "Welcome to node.js world\n", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File successfully submitted");
//   }
// });

// console.log("This line runs before the execution");

//Read
// fs.readFile("data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Files data:" data);
//   }
// });

//Append
// fs.appendFile("data.txt", "This is appended data\n", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data appended submitted");
//   }
// });

// Create folder
// fs.mkdir("nodejs", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder created successfully");
//   }
// });

// Delete file
// fs.unlink("data.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

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
