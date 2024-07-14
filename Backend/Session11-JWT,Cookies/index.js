const express= require('express');
const dotenv= require('dotenv');
dotenv.config();
const authController=require('./routes/user.route');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser')

const app= express();
app.use(express.json());
app.use(cookieParser()); //allow to read cookies
connectDB();

app.use('/api/auth',authController);

const PORT= process.env.PORT;
app.listen(PORT,()=>console.log(`application is running in ${PORT}`))