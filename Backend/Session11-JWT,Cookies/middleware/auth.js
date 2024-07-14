const jwt= require('jsonwebtoken')

async function auth(req,res,next){
    const cookie= req.cookies;
    console.log(cookie)
    if(cookie.token){
        const token=cookie.token;
        const user= await jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        next();
    }else{
        res.send('Not authorized user to access profile page')
    }
}


//for Http Headers
// async function auth(req,res,next){
//     //tokes can come either from cookkies or from Http Headers
//     //how to get token from http headers.
//     const token= req.headers.authorization;
//     console.log(token);
//     if(!token){
//         return res.send('not an authorized User')
//     }
//     else{
//         const ogToken= token.split(' ')[1];
//         const user=await jwt.verify(ogToken,
//             process.env.JWT_SECRET);
//             console.log(user)
//         req.user=user;//pass to profile page
//     }
//     next(); //you are passing user to access profile page
// }

module.exports=auth