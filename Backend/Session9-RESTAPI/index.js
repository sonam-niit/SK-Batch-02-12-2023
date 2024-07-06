const express= require('express');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
dotenv.config(); //configure .env file
const app= express();
app.use(express.json());
connectDB();

app.use('/api/user',
    require('./routes/userroutes'));
const PORT = process.env.PORT; 
//read PORT value from env file
app.listen(PORT,
    ()=>console.log(`Applictation is running on ${PORT}`))