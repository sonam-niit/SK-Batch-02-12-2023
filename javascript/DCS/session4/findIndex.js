function searchIndex(array,num){
    const res= array.findIndex(function(value){return value==num});
    return res; //if element match then return its index otherwise return -1
}

console.log(searchIndex([1,2,3,4,5,6,7,8,9,10], 2));
console.log(searchIndex([12,34,56,78,9,11], 20));
console.log(searchIndex([3,6,9,10,23,56,43,87,12],12));