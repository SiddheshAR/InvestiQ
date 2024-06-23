import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{type:String,requried:true},
    email:{type:String,requried:true},
    password:{type:String,requried:false},
    googleId:{type:String},
    image:{type:String},
    authProviderId:{type:String},
    role:{type:Boolean,requried:true,default:false},
});

export const User = mongoose.models?.User || mongoose.model("User",userSchema);


