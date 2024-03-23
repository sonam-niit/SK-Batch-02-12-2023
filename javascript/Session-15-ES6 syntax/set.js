const set= new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(40);//not allowing duplicates
console.log(set);
console.log(set.delete(40));
console.log(set);
console.log(set.size);
set.forEach((val)=>console.log(val))
for(let v of set.entries()){
    console.log(v[0]);
}

set.clear();
console.log(set);