function auth(req,res,next){
    console.log('middleware executed');
    next()
}

module.exports=auth;