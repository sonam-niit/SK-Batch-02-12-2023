const items= require('./products.json');
let count=1;
for(let p of items){
    console.log(`-------------Item ${count}---------------`);
    for(let key in p){
        console.log(`${key}: ${p[key]}`);
    }
    count++;
}