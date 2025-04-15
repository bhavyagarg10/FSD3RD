const User=require("../model/userModel");
const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
module.exports={getUsers};