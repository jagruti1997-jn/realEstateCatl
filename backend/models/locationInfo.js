const mongoose=require("mongoose");

const generalInfo=mongoose.Schema({
    email:{ type:String, required:true,unique:true  },
    City:{ type:String, required:true,unique:true  },
    Area:{type:String,required:true },
    Pincode:{ type:Number,required:true },
    Address:{type:String,required:true},
    Landmark:{type:String,required:true},
    Latitude:{type:String,required:true},
   
    Longitude:{type:String,required:true}
 
})


module.exports=mongoose.model('GeneralInfo',generalInfo)