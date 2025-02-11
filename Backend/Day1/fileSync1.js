const { log } = require("node:console");

const fs=require("node:fs");
function myReadFile(){
    try{
        const data=fs.readFileSync("dummy.text","utf-8");
        console.log("file data",data);
    }
    catch(err){
        console.log("File error",err.message);
    }
}
function myWriteFile(data){ //overwrite
    try{
        // const data="hello how are you?"
        fs.writeFileSync("dummy.text",data);
    }
    catch(err){
        console.log("File writing error",err.message);
        
    }
}
module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    username:"Bhavya1"
}
// myReadFile();
// myWriteFile();
// myReadFile();