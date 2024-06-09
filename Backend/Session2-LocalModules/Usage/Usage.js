//imported the functions and variables from File1.js
const { name,add,mul,div } = require("../Modules/File1");
const fetchData = require("../Modules/file2");
const sayHi= require('../Modules/file3');
//you can import by any name
console.log(name);
console.log(add(9,4));
console.log(mul(6,7));
console.log(div(6,3));
fetchData();
console.log(sayHi('Sonam'));
