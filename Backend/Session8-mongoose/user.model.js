const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65 },
})

const user= mongoose.model('User',userSchema);
module.exports=user;