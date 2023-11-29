const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")

const users=require("../models/userSchema")
mongoose.connect("mongodb://localhost/Authusers")


router.post("/register",async(req,res)=>{
    console.log(req.body)
   try{
      const data=await users.create(req.body)
      res.status(200).send({
          status:"sucess",
          result:data
      })

  }catch(e){
      res.status(500).send({
          status:"failed",
          message: e.message
        
      })  
  }

  
})




module.exports=router



