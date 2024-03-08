const array = [9, 7, 6, 3, 2, 0, 1, 7, 78];

//filter even number

const evenArray = array.filter(function (value) {
    return value % 2 == 0;
})
console.log(evenArray);

const arr = [1, 2, 3, 2, 5, 2, 9, 2, 6, 2, 7];
const result = arr.filter(function (val) { return val == 2 });
console.log(result.length);
