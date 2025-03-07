const express= require("express");
const fs=require("fs/promises");
const cors=require("cors");
const app=express();
const port=3003;

let users=[];

const loadUsers=async()=>{
    try{
        const userdata=await fs.readFile("./users.json","utf-8");
        users=JSON.parse(userdata);
    }
    catch(err){
        users=[];
    }
}
const saveUsers=async()=>{
    await fs.writeFile("./users.json",JSON.stringify(users));
}
app.use(cors({
    origin:"http://localhost:5173"
}));

//middleware
// const m1=(req,res,next)=>{
//     const age=req.query.age;
//     if(!age){
//         res.status(400).json({status:"fail",message:"enter age in query"});
//     }
//     else{
//         if(age<18){
//             res.status(401).json({status:"fail",message:"user not authorized"});
//         }
//         else{
//             next();
//         }
//     }
// }
// app.use(m1);//application level middleware apply for all

app.use(express.json());
loadUsers();

app.get("/users",async(req,res)=>{
    res.status(200).json(users);
})

app.get("/users/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"user not found"});
    }
    else{
        res.status(200).json({status:"success",message:"user found",data:users[index]});
    }
})

app.post("/createusers",async(req,res)=>{     //here we use m1 as router level middle ware m1 only apply to this
    const{name,email}=req.body;
    if(!name||!email){
        res.status(400).json({status:"fail",message:"enter full data"});
    }
    else{
        const newId=Date.now();
    const newUser={
        id:newId,name,email
    }
    
    users.push(newUser);
    saveUsers()
    // await fs.writeFile("./users.json",JSON.stringify(users));
    res.status(201).json({status:"success",message:"user created successfully",data:newUser})
    }
})

app.patch("/editusers/:id",(req,res)=>{
    const uid=req.params.id;
    const {name,email}=req.body;
    if(!name||!email){
        res.status(400).json({status:"fail",message:"enter full data"});
    }
    else{
        const index=users.findIndex(ind=>ind.id==uid);
        if(index==-1){
            res.status(400).json({status:"fail",message:"user not found"});
        }
        else{
            users[index].name=name;
            users[index].email=email;
            saveUsers();
            res.status(200).json({status:"success",message:"user edited successfully"})
        }
        
    }
})

app.delete("/deleteusers/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"user not found"});
    }
    else{
        const deldata=users.splice(index,1);
        saveUsers();
        res.status(200).json({status:"success",message:"user deleted succesfully",data:deldata});
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
    
})