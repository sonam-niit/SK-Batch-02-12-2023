const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    profile: {type:String,required:true},
})

const UserModel= mongoose.model('User',userSchema);

module.exports= UserModel;