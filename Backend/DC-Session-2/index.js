const express= require('express');
const products= require('./assets/products.json');
const app= express();

app.get('/products',(req,res)=>{
    res.send(products);
})
app.get('/products/:id',(req,res)=>{
    const id= req.params.id;
    const product= products.find(item=>item.id==id);
    if(product){
        res.status(200).send(product);
    }else{
        res.status(404).send('Product not found');
    }
})
app.get('/category/:category',(req,res)=>{
    const category= req.params.category;
    const filterPro= products.filter(item=>item.category==category);
    if(filterPro.length!=0){
        res.status(200).send(filterPro);
    }else{
        res.status(404).send('No Products available in this category');
    }
})
app.get('/rating1',(req,res)=>{
    const data= products.filter(item=>item.rating>=4.5);
    res.send(data);
})
app.get('/rating2',(req,res)=>{
    const data= products.filter(item=>item.rating<4.5);
    res.send(data);
})
app.get('/pricelowtohigh',(req,res)=>{
    const data= [...products].sort((a,b)=>a.price-b.price);
    res.send(data);
})
app.get('/pricehightolow',(req,res)=>{
    const data= [...products].sort((a,b)=>b.price-a.price);
    res.send(data);
})

app.listen(5500,()=>console.log('Server is listening on port 5500'))