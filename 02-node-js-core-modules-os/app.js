// import os module / library
const os = require('os');

// home Dir
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// total memory
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// Free Memory
let freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory}`);

// platform
let platform = os.platform();
console.log(`PlatForm : ${platform}`);

// userInfo
let userInfo = os.userInfo();
console.log(userInfo);
