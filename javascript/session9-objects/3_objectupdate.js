const person={
    id:1,
    name:"Sonam Soni",
    email:"sonam@gmail.com",
    country:"india",
    address:'XYZ,India'
}
console.log(person);
person.age=45; //added new property
person.country="US"; //update existing property
delete person.address; //remove existing property

console.log(person);