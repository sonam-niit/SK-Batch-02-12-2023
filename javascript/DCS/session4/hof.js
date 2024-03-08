const array = [1, 2, 3, 4, 5, 6, 7, 8];
//create new array from above array by multiplying 3
const newArray = array.map(function (value) {
    return value * 3;
})
//it will take one one value from array multiply by 3 and store it in newArray
console.log('Original Array',array);
console.log("New Array",newArray);

const names=["A","B","C","D","E","F"]
console.log(names); //print object
names.forEach(function(value){
    console.log(value); //print string (white color)
})