const url= require('url'); //imported the URL Module

const browserUrl='http://www.example.com:4000/exams/papers/2024/paper1.html?name=sonam&age=34';

const myUrl=  url.parse(browserUrl,true);//true is for reading query parameter
console.log('Protocol: '+myUrl.protocol); //http
console.log('Port: '+myUrl.port); //4000
console.log('Host Details: '+myUrl.host); // www.example.com:4000
console.log('Host name: '+myUrl.hostname); //www.example.com
console.log('Path: '+myUrl.path); ///exams/papers/2024/paper1.html?name=sonam&age=34
console.log('PathName: '+myUrl.pathname); ///exams/papers/2024/paper1.html
const query= myUrl.query; //?name=sonam&age=34
console.log(query.name+" "+query.age); //we will get name and age