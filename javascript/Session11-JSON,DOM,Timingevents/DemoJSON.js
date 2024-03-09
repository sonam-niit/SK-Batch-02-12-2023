const data='{"id":1,"name":"sonam soni"}' //JSON data
console.log(data);
//Convert in Object

const object=JSON.parse(data);
console.log(object);

//Convert javascript object into JSON
const obj1={id:303,name:'pencil',price:10,rating:4.7};
console.log(`Javascript Object: `,obj1);
const json=JSON.stringify(obj1);
console.log(json);