const jwt= require('jsonwebtoken');
const auth=(req,res,next)=>{

    const token= req.headers.authorization;
    console.log(token);
    if(token){
        const ogToken= token.split(' ')[1];
        const data= jwt.verify(ogToken,process.env.JWT_SECRET);
        console.log(data);
        req.user=data;//will send this data to profile
        next();
    }else{
        return res.send('Login first')
    }
}
module.exports= auth;