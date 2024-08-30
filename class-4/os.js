// Os module:

const os = require("os");
//console.log(os);

console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.type()); //Windows_NT
console.log(os.release()); //10.0.22631
console.log(os.version()); //Windows 11 Home Single Language
console.log(os.homedir()); //C:\Users\surya
console.log(os.hostname()); //lenovo
console.log(os.userInfo()); //
console.log(os.userInfo().username); //surya
console.log(os.freemem(`${911233024 / 1024 / 1024 / 1024}`));
const totalMemory = os.totalmem();
console.log(os.totalmem(`${totalMemory / 1024 / 1024 / 1024}`));

console.log(os.tmpdir());
