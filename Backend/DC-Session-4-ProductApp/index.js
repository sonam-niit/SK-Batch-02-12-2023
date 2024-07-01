const read= require('readline-sync');
const connectDB = require("./config/db");
const { addProduct, getAllProducts, getProductById, getProductByName } = require('./controllers/productController');

connectDB();
console.log("Welcome to My Product Application");
console.log(`Enter 1 to add Product, 2 to get ALL, 3 to getById, 4 to getByName,
    5 to getByCategory, 6 to updateProduct, 7 to deleteProduct`);
const input= read.question('Enter your Input from 1-7: ');
switch(Number(input)){
    case 1:
        const name= read.question('Enter Product Name: ');
        const price= read.question('Enter Product Price: ');
        const desc= read.question('Enter Product Description: ');
        const category= read.question('Enter Product Category: ');
        addProduct(name,price,desc,category);
        break;
    case 2:
        getAllProducts(); break;
    case 3:
        const pid= read.question('Enter ProductId: ');
        getProductById(pid);
    case 4:
        const pname= read.question('Enter Product Name: ');
        getProductByName(pname);
    default:
        console.log("Enter Correct Option: ");
}
