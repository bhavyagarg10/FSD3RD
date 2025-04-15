const express =require("express")
const dotenv=require("dotenv")
const connectdb=require("./config/db")
dotenv.config();
const app=express()
const userRoutes=require("./routes/userRoutes")

connectdb()
app.use(express.json())
app.use("/",userRoutes)

const Port=process.env.Port || 3000
app.listen(Port, ()=>{
    console.log(`server is running on port ${Port} `)
})