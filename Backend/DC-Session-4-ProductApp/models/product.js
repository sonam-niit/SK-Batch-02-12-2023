const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    name:{ type:String ,required: true },
    price:{ type:Number, required:true},
    desc: {type:String, required:true},
    category: {type:String, required:true},
    date: {type:Date, default:Date.now}
})

const ProductModel= mongoose.model('Product',productSchema);
module.exports = ProductModel;