const array=[1,2,3,4,5,6,7,8];
//Old Process
// const newArray=[];
// for(let x of array){
//     newArray.push(x*2);
// }
// console.log(newArray);

const newArray= array.map(cb);

function cb(value){
    return value*2;
}

console.log("Original Array",array);
console.log(newArray);