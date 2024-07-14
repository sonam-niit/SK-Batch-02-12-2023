const express= require('express');
const UserModel= require('../models/user.model');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const router= express.Router();
const auth= require('../middleware/auth')

router.post('/register',async(req,res)=>{
    try {
        const {name,email,username,password}=req.body;
        if(!name || !email || !username || !password){
            return res.status(400).send({message:'All fields are mandatory'})
        }
        let user= await UserModel.findOne({email});
        if(user){
            return res.status(400).send({message:'Email Id Already registered'})
        }
        user= await UserModel.findOne({username});
        if(user){
            return res.status(400).send({message:'Username is already taken by Someone'})
        }
        const hashPwd= await bcrypt.hash(password,10);
        const newUser= new UserModel({name,email,username,password:hashPwd});
        const resp= await newUser.save();
        res.status(201).send({message:'User Registered Successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Internal error occured'})
    }
})
router.post('/login',async(req,res)=>{
    try {
        const {email,password}= req.body;
        if(!email || !password){
            return res.status(400).send({message:'All fields are mandatory'})
        }
        let user= await UserModel.findOne({email});
        if(!user){
            return res.status(400).send({message:'This Email Id is not registered with US'})
        }
        //now let's match the password
        const match= await bcrypt.compare(password,user.password);
        if(match){
            const payload= {id:user._id,name:user.name, email:user.email};
            const token= await jwt.sign(payload,process.env.JWT_SECRET);
            //let's store token in cookies
            res.cookie('token',token);
            return res.status(200).send({message:'Logged In Successfully',token})
        }else{
            return res.status(500).send({message:'Invalid credentials'})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Internal error occured'})
    }
})
//this route is protected
router.get("/profile",auth,(req,res)=>{
    const details=req.user;
    res.send({msg:'Welcome to your profile',details})
})


module.exports= router;










