const express=require("express")
const port=3001;
const app=express();
const products=[{
    id: 1001,
    title: "Laptop",
    price: 51000,
    quantity: 5
},
{
    id: 1002,
    title: "Mobile",
    price: 10000,
    quantity: 4
}
];

app.get("/products",(req,res)=>{
    // if(products==null){
    //     return <h1> You have no product</h1>
    // }
    res.status(200);
    res.json(products)
})
app.get("/products/:id",(req,res)=>{
    const pid=req.params.id;
    const index=products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"Product id not found"})
    }
    else{
        res.status(200).json({status:"success",message:"Product id found",data:products[index]})
    }

} )
app.use(express.json())
app.post("/products",(req,res)=>{
    const {title,price,quantity}=req.body;
    if(!title || !price|| !quantity){
        res.status(400).json({status:"fail",message:"all fields are requifed"});
}
else{
    const newid= products.length>0 ? products[products.length-1].id+1:1001
    const newProduct={
        id:newid,title,price,quantity
    }
    products.push(newProduct);
    res.status(201).json({status:"success",message: "product created successfully",newProduct})
}
})

app.patch("/editproducts/:id",(req,res)=>{
    const pid=req.params.id;
    const {title, price,quantity}=req.body;
    if(!title||!price||!quantity){
        res.status(400).json({status:"fail",message:"all feilds required except id"});
    }
    else{
        const index=products.findIndex(ind=>ind.id==pid);
        if(index!=-1){
            products[index].title=title;
            products[index].price=price;
            products[index].quantity=quantity;
            res.status(200).json({status:"success",message:"data edited successfully",data:products[index]})
        }
        else{
            res.status(400).json({status:"fail",message:"item not found"});
        }
    }
})

app.delete("/deleteproducts/:id",(req,res)=>{
    const pid=req.params.id;
    const index=products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"item not found"})
    }
    else{
        products.splice(index,1);
        res.status(200).json({status:"success", message:"item deleted successfully"});
    }
})

app.listen(port,(err)=>{
    try{
        if(err) throw err;
        else{
            console.log(`Server is running on port ${port}`);
            
        }
    }
    catch(err){
        console.log("Server Error",err.message);
    }
})