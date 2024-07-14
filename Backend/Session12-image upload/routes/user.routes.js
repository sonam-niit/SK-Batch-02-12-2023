const express= require('express');
const upload = require('../middleware/fileupload');
const UserModel= require('../model/user.model');

const router= express.Router();
router.post('/upload',upload.single('profile'),async(req,res)=>{
    const fileName= req.file.filename;
    try {
        const {name,email}=req.body;
        const newUser= new UserModel({name,email,profile:fileName});
        const resp= await newUser.save();
        res.send('image uploaded')
    } catch (error) {
        console.log(error);
        res.send('error occured');
    }
})
module.exports=router