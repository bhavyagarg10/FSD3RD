const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
// const url=process.env.MONGO_URL;
const connectdb= async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL);
      console.log("mongodb connected")
    }
    catch(err){
        console.error("Mongodb connection failed",err.message)
        process.exit(1) //exit app if db connection fail
    }
}
module.exports=connectdb;
