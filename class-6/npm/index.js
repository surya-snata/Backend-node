const validator = require("validator");
const isOdd = require("is-odd");
const result = validator.isEmail("suryasnata8594gmail.com");
console.log(result); // false

const checkBoolean = validator.isBoolean("false");
console.log(checkBoolean); // true

const checkIMEI = validator.isIMEI("860432059426753");
console.log(checkIMEI); // true

const checkOdd = isOdd("29");
console.log(checkOdd);

console.log("I am learning nodemon");

// nodemon :
// npm install nodemon
// nodemon index.js(script file)
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// to exit - `ctrl + c`
