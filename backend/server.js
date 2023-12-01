const express = require("express");
const bodyParser=require('body-parser')
const signuproute=require("./routes/signup")
const signinroute=require("./routes/signin")
// const users=require("../models/userSchema")
// const jwt = require("jsonwebtoken");
// const secret = 'RESTAPI'
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors())
app.use("/signup",signuproute)  // http://localhost:8000/signup/register
app.use("/signin",signinroute)  //http://localhost:8000/signin/login
const port=8000;
app.listen(port,()=>{
    console.log("server start at port 8000")
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