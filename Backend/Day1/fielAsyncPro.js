const { log } = require("console");
const fs=require("fs/promises")

//readFile() or writefile function doesnt throw any error so, we throw error if occur

function myReadFile(){
    try{
        const res=fs.readFile("dummy.text","utf-8");
        res.then((data)=>{
            console.log("file data", data);
        })
        .catch((err)=>{
            throw err;
        })
    }
    catch(err){
        console.log("file Reading Error",err.message);
    }
}

function myWriteFile(data){
    try{
        const res=fs.writeFile("dummy.text",data);
        res.then(()=>{
            console.log("Writing Successfully done");
        })

        .catch((err)=>{
            throw err;
        })
    }
    catch(err){
        console.log("File Write error",err.message);
        
    }
}
myReadFile();
myWriteFile("Hlw i am bhavya")
myReadFile();