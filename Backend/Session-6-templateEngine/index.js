const express= require('express');
const users= require('./users.json');
const app= express();
app.use(express.json());
//by default folder name is views
app.set('views', './myviews')
app.set('view engine', 'pug');
//set your template engine
app.get('/',(req,res)=>{
    //res.send("hello world");
    res.render('index');
})
app.get('/users',(req,res)=>{
    res.render('userlist',{users})
})
app.get('/message',(req,res)=>{
    res.render('message',
        {title:'SKILLACADEMY',
            message:"Good Evening ALL...!!"})
})

app.listen(5000,
    ()=>console.log('Application started'));