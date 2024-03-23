
//function declaraion
const hello=()=>console.log('Hello world');
const add= (num1,num2)=> num1+num2; //return implicitly
//function calling
hello();
console.log(add(2,3));

const calculate=(n1,n2)=>{
    const num1=n1+n2;
    const num2=n1*n2;
    return num1+num2; //return required 
}

console.log(calculate(2,3));