const map= new Map();
map.set(1,{name:'sonam',age:45});
map.set(2,{name:'alex',age:12});
map.set(3,{name:'bob',age:89});
map.set(4,{name:'catty',age:23});
console.log(map);
console.log(map.get(4));
console.log(map.has(10));
map.delete(4);
console.log(map);
console.log(map.size);
map.forEach((value,key)=>{
    console.log("-------------Key "+key+"----------------");
    for(let k in value){
        console.log(k+" : "+value[k]);
    }
})