const mongoose=require("mongoose");

const propertydetailsSchema=mongoose.Schema({
    Length:{ type:Number, required:true,  },
    Breath:{type:Number,required:true },
    TotalArea:{ type:Number,required:true },
    AreaUnit:{ type:Number,required:true },
    NoofBHK:{ type:Number,required:true },
    Nooffloor:{ type:Number,required:true },
    WesternToilet:{ type:String,required:true },
    Furnished:{ type:String,required:true },
    CarParking:{ type:Number,required:true },
    Lift:{ type:Number,required:true },
    Electricity:{ type:String,required:true },
    Facing:{ type:String,required:true },
   

 
})


module.exports=mongoose.model('PropartyDetails',propertydetailsSchema)