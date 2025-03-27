const {MongoClient}=require("mongodb");
const Mongo_URL="mongodb+srv://bhavyagarg310:root@cluster0.biyiytx.mongodb.net/FSD-CSE-AIML?retryWrites=true&w=majority&appName=Cluster0"
MongoClient.connect(Mongo_URL)
.then(client=>{
    console.log("MONGODB Connected");
})
.catch((err)=>{
    console.log("DB Error",err.message);
})