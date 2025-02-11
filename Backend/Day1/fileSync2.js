const { log } = require("node:console");
const {myReadFile,myWriteFile,username}=require("./fileSync1") ;
myReadFile();
myWriteFile("Hii i am Bhavya");
myReadFile();
console.log("username: ",username);