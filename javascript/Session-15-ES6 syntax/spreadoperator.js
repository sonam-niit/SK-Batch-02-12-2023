const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9];

//merge
const mergeArr= arr1.concat(arr2);
console.log(mergeArr);

const mergeArr1= [...arr1,...arr2]; //spread operator
console.log(mergeArr1);

const obj1={id:1,name:'sonam soni'};
const obj2={country:'India'};
const user={...obj1,...obj2};
console.log(user);
console.log({...arr1,...obj1});
console.log(...arr1,45,89);
console.log({...obj1,...obj2,...{age:89,result:8.9,name:'Asma'}});