import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userModel = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model("User",userModel)
export default User;