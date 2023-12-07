const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const postSchema = new Schema({
    PropertyType: {type: String ,required: true},
    Negotable:{type:String},
    Price:{type:Number},
    Ownership:{type:String},
    PropertyAge:{type:String},
    PropertyApproved:{type:String},
    PropertyDescription:{type:String},
    BankLoan:{type:String},
    user:{type:Schema.Types.ObjectId,ref:"User"}
   

},{timestamps:true})
const post=mongoose.model("Post",postSchema)
module.exports=post;