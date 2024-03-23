//Rest Parameter
function sum(...nums){

    let total=0;
    for(let n of nums){
        total+=n;
    }
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7));
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(sum());
console.log(sum(10,20,30,40,50));