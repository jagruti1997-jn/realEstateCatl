const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const postSchema = new Schema({
    PropertyType: {type: String },
    Negotable:{type:String},
    Price:{type:Number},
    Ownership:{type:String},
    PropertyAge:{type:String},
    PropertyApproved:{type:String},
    PropertyDescription:{type:String},
    BankLoan:{type:String},
    Length:{type:String},Breadth:{type:String},TotalArea:{type:String},AreaUnit:{type:String}
    ,NoofBHK:{type:String},NoofFloor:{type:String},Attached:{type:String},WesternToilet:{type:String},Furnished:{type:String}
    ,CarParking:{type:String},Lift:{type:String},Electricity:{type:String},Facing:{type:String},
    user:{type:Schema.Types.ObjectId,ref:"User"}
   

},{timestamps:true})
const post=mongoose.model("Post",postSchema)
module.exports=post;