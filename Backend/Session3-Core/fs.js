const fs= require('fs');

function writeDataToFile(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data Written Successfully");
        }
    })
}
function appendDataToFile(fileName,data){
    fs.appendFile(fileName,data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data Appended Successfully");
        }
    })
}
appendDataToFile('hello.txt','Welcome to the World of NodeJs FileSystem. ');
appendDataToFile('data.txt','This is My New File. ');

//writefile is creating file is its not available
//if its available then it overrides the content.