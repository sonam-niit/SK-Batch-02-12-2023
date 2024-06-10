const str='malaylam';

const array= str.split('');
const map= new Map();
for(let key of array){
    if(!map.has(key)){
        map.set(key,1);
    }else{
        map.set(key,map.get(key)+1);
    }
}
console.log(map);
