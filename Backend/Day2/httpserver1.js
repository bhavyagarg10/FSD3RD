const http=require("http");
const fs=require("fs/promises")
const server=http.createServer(async(req,res)=>{
    const url=req.url;
    if(url==="/home" && req.method=="GET"){
        const data= await fs.readFile("home.html","utf-8");
        res.write(data);
    }
    else if(url==="/about" && req.method=="POST"){ //on web browser we can only see get for post we have to use postman or thunderclient
        const data=await fs.readFile("about.html","utf-8");
        res.write(data);
    }
    else{
        res.write("<h1>Error Page</h1>")
    }
    res.end();
    })

server.listen(3001,(err)=>{
    try{
        if(err) throw err;
        console.log("server is running on port 3001");
    }
    catch(err){
        console.log("Server error: ",err.message);
    }
    
})
//if we run server with node --watch filename then it refreshes server each time when you change any code 