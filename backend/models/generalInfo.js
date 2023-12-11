const mongoose=require("mongoose");

const generalInfo=mongoose.Schema({
    name:{ type:String, required:true,unique:true  },
    Mobile:{ type:Number, required:true,unique:true  },
    Postedby:{type:String,required:true },
    SaleType:{ type:Number,required:true },
    FeaturedPackage:{type:String,required:true},
    PPDPackage:{type:Number,required:true}
 
})


module.exports=mongoose.model('GeneralInfo',generalInfo)