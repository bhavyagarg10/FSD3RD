const fs=require("fs");
function myReadFile(){
    try{
        fs.readFile("dummy.text","utf-8",(err,data)=>{
            if(err) throw err;
            console.log("file data: ",data);
            
        });

    }
    catch(err){
        console.log("file reading error",err.message);
        
    }
}
function myWriteFile(data){
    try{
        fs.writeFile("dummy.text",data,(err)=>{
            if(err) throw err;
            console.log("success");
            
        });
    }
    catch(err){
        console.log("write error",err.message);
    }
}
myWriteFile("hello i am engineering student");
myReadFile();