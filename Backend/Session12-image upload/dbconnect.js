const mongoose= require('mongoose');

const connect=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/insta');
        console.log('Connected');
    } catch (error) {
        console.log('Error',error);
    }
}
module.exports=connect;