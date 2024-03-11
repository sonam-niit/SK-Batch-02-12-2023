function convertToObject(array){
    const obj={};
    for(let r=0;r<array.length;r++){
            let key= array[r][0];
            let value= array[r][1];
            obj[key]=value;
    }
    return obj;
}
const TwoDArray=[
    ['sonam','pizza'],
    ['mansi','burger'],
    ['sandeep','ice-cream']
];
console.log(convertToObject(TwoDArray));