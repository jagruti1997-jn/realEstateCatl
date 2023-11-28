const express = require("express");
const app=express();

require("./db/connection")
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')
// const router=require("./routes/router")
const cors=require('cors');
const User=require('./models/userSchema')
const SECRET_KRY='secretkey'



const port=8000;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
// app.use(router)

app.listen(port,()=>{
    console.log("server start at port 8000")
})



app.post('/register',async(req,res)=>{
    try{
        const {email,password,cpassword}=req.body;
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=new User({email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:'User created succesfully'})
    }catch (error){
        res.status(500).json({error:'error signing up'})
    }
})


// app.get('/register',async (req,res)=>{
//     try{
//         const users=await User.find()
//         res.status(201).json(users)
//     }catch(error){
//         res.status(500).json({error:"unable to get users"})
//     }

// })


// app.post('/login',async (req,res)=>{
//     try{
//         const {email,password}=req.body
//         const user= await User.findOne({email})
//         if(!user){
//             return res.status(401).json({error:'invalid credential'})
//         }
//         const isPasswordValid= await bcrypt.compare(password,user.password)
//         if(!isPasswordValid){
//             return res.status(401).json({error:'invalid credentials'})
//         }
//         const token=jwt.sign({emailId: email._id},SECRET_KRY,{expireIn:'1hr'})
//         res.json({message:'Login successful'})
//     }catch(error){
//         res.status(500).json({error:'error logging in'})
//     }
// })