function test(){

    var a=10; //Introduced in old JS which is having functional scope
    let b=20; //introduced in ES6 which is having local scope
    const c=20; //introduced in ES6 which is having local scope and its constant
}
//if you declare any variable here its considered as global scope

//variable redeclaration is possible with var but not with let and const
//variable hoisting is possible with var but not with let and const

console.log(a);
var a=10;
console.log(b); //throw error
let b=10;




