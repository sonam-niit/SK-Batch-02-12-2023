const array=[45,67,89,69,87,84,54,90];

const res= array.every(function(value){return value>=35});
console.log(res);
//it checks all elements with the condition if it matches with all then return true else false

const res1= array.some(function(value){return value>=90});
console.log(res1);
