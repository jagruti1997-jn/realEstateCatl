const express = require("express");
const bodyParser=require('body-parser')
const signuproute=require("./routes/signup")
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors())
app.use("/signup",signuproute)
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