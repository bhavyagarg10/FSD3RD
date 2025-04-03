//crud operation using mongoose driver

const mongoose=require("mongoose");
const mongo_url="mongodb://localhost:27017/FSD_CSE_AIML_A";

//connection to database
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MONGODB CONNECTED SUCESSFULLY");
})
.catch(err=>{
    console.log("DB Error",err.message);
})

//create schema for collection
const studentSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,require:true, unique:true},
    age:{type:Number,require:true}
}) 

//create model of that schema
const Student=mongoose.model("students",studentSchema)

//create instance in collection or model
const createStudent=async()=>{
    try{
        const newStudent=new Student({name:"abd",email:"abd@gmail.com",age:20});
        await newStudent.save();
        console.log("Student created successfully",newStudent);
        
}
catch(err){
    console.log("student creation error",err.message);
    
}
}
// createStudent()

//Showing or reading data
const getStudents=async()=>{
    try{
        const students=await Student.find();
        console.log("Students",students);
    }
    catch(err){
        console.log("Cannot find any instance",err.message);
        
    }
}
// getStudents()

//update the data
const updateStudents=async()=>{
    try{
    const Students=await Student.findOneAndUpdate({name:"abd"},{age:25},{new:true})
    console.log("updated succesfully",Students);
    }
    catch(err){
        console.log("updation cannot processed");
    }
}
// updateStudents()

//delete data
const deleteStudents=async()=>{
    try{
        const Students=await Student.findOneAndDelete({name:"abd"})
        console.log("deleted successfully",Students);
    }
    catch(err){
        console.log("cannot deleted unfortunately");
    }
}
// deleteStudents()

const app=async()=>{
    await createStudent();
    await updateStudents();
    await deleteStudents();
    await getStudents();
}
// app()