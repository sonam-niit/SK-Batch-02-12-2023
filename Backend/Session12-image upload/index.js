const express = require('express');
const connect = require('./dbconnect');
const app= express();

connect();
app.use(express.json());
app.use('/profiles',express.static('uploads'));
app.use('/api/user',require('./routes/user.routes'));
//use upload here as middleware
// app.post("/upload",upload.single('profile'),(req,res)=>{
//     console.log(req.file);
//     res.send('image uploaded successfully')
// })

app.listen(5000,()=>console.log('Server Started'))