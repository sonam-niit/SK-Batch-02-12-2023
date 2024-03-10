const employee={
    id:101,
    name:'Mitali Vichare',
    designation: 'Product Manager',
    department: 'Sales',
    salary: '34567'
}
//Iteration use for in loop
for(let key in employee){
    console.log(key+': '+employee[key]);
}