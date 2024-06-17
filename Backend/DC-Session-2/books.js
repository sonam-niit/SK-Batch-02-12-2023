const express= require('express');
const books= require('./assets/books.json');
const app= express();

app.get('/books',(req,res)=>{
    //get All books
})
app.get('/books/:id',(req,res)=>{
    //bet book by id
})
//sort books by its publication date
app.get('/books/sort/oldest-to-newest',(req,res)=>{
})
app.get('/books/sort/newest-to-oldest',(req,res)=>{
})
app.get('/books/genre/:genre',(req,res)=>{
})
app.get('/books/author/:author',(req,res)=>{
})

app.listen(5500,()=>console.log('Server is listening on port 5500'))