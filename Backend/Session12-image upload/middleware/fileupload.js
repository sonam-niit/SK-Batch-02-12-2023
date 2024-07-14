const multer = require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now();
        const data=file.originalname.split('.'); //pen.jpg ['pen','jpg']
        const fileExt=data.pop(); //'jpg'
        const fname=data.pop(); //'pen'
        cb(null,fname+'-'+uniqueSuffix+"."+fileExt)
    }
})
const upload= multer({storage:storage,
    limits:{
        fileSize:1024*1024*5 //5MB limit for image upload
    }
})

module.exports=upload;