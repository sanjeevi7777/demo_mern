const mongoose =require('mongoose')

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
});
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel