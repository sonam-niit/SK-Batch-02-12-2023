const ProductModel = require('../models/product');
async function addProduct(name,price,desc,category){
    try {
        const newProduct= new ProductModel({name,price,desc,category});
        const createdProduct= await newProduct.save();
        console.log('Product Created Successfully',createdProduct);
    } catch (error) {
        console.log(error);
    }
}
async function getAllProducts(){
    try {
        const products= await ProductModel.find();
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}
async function getProductByName(name){
    try {
        const product= await ProductModel.find({name});
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}
async function getProductById(id){
    try {
        const product= await ProductModel.findById(id);
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}
async function getProductsByCategory(category){
    try {
        const products= await ProductModel.find({category});
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}
async function updateProduct(id,object){
    try {
        
    } catch (error) {
        console.log(error);
    }
}
async function deleteProduct(id){
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    addProduct,
    getProductById,
    getAllProducts,
    getProductByName,
    getProductsByCategory,
    updateProduct,
    deleteProduct
}