// import modules
const fs = require("fs");

//Create Folder:

// fs.mkdir("nodejs", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder successfully created");
//   }
// });

// Create File:

// fs.writeFile("data.txt", "This is data. \n", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File successfully submitted");
//   }
// });

// Append File:

// fs.appendFile("data.txt", "This is append data. \n", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Appended successfully");
//   }
// });

// Rename File :

// fs.rename("data.txt", "node.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File name changed successfully");
//   }
// });

// Research about buffer data, encoding and "utf-8"

// Buffer data:
// In Node.js, a Buffer is a type of data that represents a fixed-size  of memory.
// it is similar to an array of integers.
// it can hold raw binary data.
// Buffers are used to handle binary data, such as images, audio, and video,
// as well as text data in a specific encoding.

// eg :
// Read File:
// fs.readFile("node.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

// Delete File:

// fs.unlink("node.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

// Delete Folder :

// fs.rmdir("nodejs", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder deleted successfully");
//   }
// });

// Difference between asynchronous and synchronous with example

// Synchronous :
// In synchronous programming, operations are performed one after the another.
// Every statement waits for the previous one to finish before it runs.
// eg:
// console.log("Hello World");
// console.log("Welcome to node.js");

// output :
//     Hello World
//     Welcome to node.js

//Asynchronus :
// In asynchronous programming operations are runs independently.
// In this, program continues executing other tasks while waiting for the response.
// eg :
// console.log("First");
// setTimeout(() => console.log("Second"), 2000);
// console.log("Third");

// output :
//     First
//     Third
//     Second
