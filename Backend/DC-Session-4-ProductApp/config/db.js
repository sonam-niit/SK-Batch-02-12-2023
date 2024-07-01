const mongoose= require('mongoose');

async function connectDB(){

    try {
        await mongoose.connect('mongodb://localhost:27017/productapp');
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB;