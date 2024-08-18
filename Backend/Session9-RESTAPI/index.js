const express= require('express');
const dotenv= require('dotenv');
const cors= require('cors'); //import cors
const connectDB = require('./config/db');
dotenv.config(); //configure .env file
const app= express();
app.use(express.json());
app.use(cors()); //permission for frontend
connectDB();

app.use('/api/user',
    require('./routes/userroutes'));
const PORT = process.env.PORT; 
//read PORT value from env file
app.listen(PORT,
    ()=>console.log(`Applictation is running on ${PORT}`))