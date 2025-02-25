const http=require("http");
const { json } = require("stream/consumers");
const port=3003;
const data=[{
    id:1001,name:"Bhavya Garg",email:"bha.@gmail.com"
}];
const server=http.createServer((req,res)=>{
    
    const url=req.url;
    if(url=="/user" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(data));
    }
    else if(url=="/user" && req.method=="POST"){
        let body='';
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const parseddata=JSON.parse(body);
            const {name,email}=parseddata;
            const newID=data.length>0?(data[data.length-1].id+1):1001;
            const newuser={id:newID,name:name,email:email};
            data.push(newuser);
            
        })
        res.writeHead(201,{"Content-Type":"application/json"});
        res.write(JSON.stringify({status:"Success",message:"User created successfully"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.write(JSON.stringify({status:"fail",message:"Page not found"}));
    }
    res.end();
})
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log("Server Error",err.message);
        
    }
})
//server is stateless   means it treat each process independtly 