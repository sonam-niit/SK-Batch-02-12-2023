const express= require('express');
const products= require('./products.json');
const app= express(); //created express server

app.get('/products',(req,res)=>{
    res.json(products); //send JSON repsonse
})
app.get('/products/:pid',(req,res)=>{
    const id= req.params.pid;//getting req param
    //console.log(id);
    const product= products.find(item=>item.id==id);
    if(product){
        return res.send(product);
    }
    return res.send("Product not found")
})
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Us Page</h1>');
})
app.get('/news',(req,res)=>{
    res.status(200).send('<h1>News Page</h1>');
})
app.get('/contact',(req,res)=>{
    res.status(200).send('<h1>Contact Us Page</h1>');
})
//make a perticular folder static
app.use('/',express.static('website'));
//load HTML Page
app.use((req,res)=>{
    //_dirname for giving absolute path
    res.sendFile(__dirname+'/files/home.html');
})
app.listen(5000,()=>console.log('Server Started'))