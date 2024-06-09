const name="Sonam Soni";

const add= (num1,num2)=>{
    return num1+num2;
}
const sub= (num1,num2)=>num1-num2;

const mul= (num1,num2)=> num1 * num2;
const div= (num1,num2)=> {
    if(num2==0){
        return "cannot divide by 0"
    }else{
        return num1/num2;
    }
}
module.exports = {
    add,sub,mul,div,name
}

//exported in the form of Object