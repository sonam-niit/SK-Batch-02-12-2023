const array=[
    [1,2,3,4,5,6,7,8],
    [1,3,6,8,9],
    [1,2,6,8]
]

let data='';
for (let r = 0; r < array.length; r++) {
    for(let c=0;c< array[r].length;c++){
        data+=array[r][c]+'\t';
    }
    data+='\n';
}
console.log(data);

console.log('Using for Of loop');
data='';
for (let r of array) {
    for(let c of r){
        data+=c+'\t';
    }
    data+='\n';
}
console.log(data);

