const { log } = require("console");
const fs=require("fs/promises")
async function myReadFile(){
    try{
        const res=await fs.readFile("dummy.text","utf-8");
        console.log("file data", res);
    }
    catch(err){
        console.log("file Reading Error",err.message);
    }
}

async function myWriteFile(data){
    try{
        const res=await fs.writeFile("dummy.text",data);
        console.log("Writing Successfully done");
    }
    catch(err){
        console.log("File Write error",err.message);
        
    }
}
myReadFile();
myWriteFile("Hlw i am bhavya")
myReadFile();