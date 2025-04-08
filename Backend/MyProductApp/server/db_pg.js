const {Client}= require("pg");
const client=new Client({
    host: "localhost",
    port:5432,
    database: "postgres",
    user:"postgres",
    password:"root"
});

client.connect()
.then(()=>{
    console.log("postgreSQL Connected");
})
.catch(err=>{
    console.log("DB Error", err.message);
})

client.query("select * from users",(err,res)=>{
    if(err){
        console.log("Query Error",err.message)
    }
    else{
        console.log("done ",res.rows)
    }
})