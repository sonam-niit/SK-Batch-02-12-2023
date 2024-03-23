const arr= [1,2,3,4,5,6,7,8,9,10];

const newArray= arr.map((value)=>value*2);
console.log(newArray);

const evnArr= arr.filter((value)=>value%2==0);
console.log(evnArr);

const sum = arr.reduce((acc,cur)=>acc+cur);
console.log(sum);
const max = arr.reduce((acc,cur)=>acc<cur?cur:acc);
console.log(max);
const min = arr.reduce((acc,cur)=>acc>cur?cur:acc);
console.log(min);
const found= arr.find((value)=>value==60);
console.log(found);