class Employee{
    constructor(id,name,department,salary,yoj){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
        this.yoj=yoj;
        console.log('object iniatiated');
    }
    displayDetails(){
        console.log("---------------------------------------------------");
        console.log('Id: ',this.id);
        console.log('Name: ',this.name);
        console.log('Department: ',this.department);
        console.log('Salary: ',this.salary);
        console.log('Year of Joining: ',this.yoj);
    }
    expInYears(){
        console.log('Experience in this company: '+(2024-this.yoj)+" Years");
    }
}

const emp1= new Employee(1,'sonam','Information Technology','34567',2017);
const emp2= new Employee(2,'Rajan','Artificial intellegence','87652',2023);
const emp3= new Employee(3,'Mansi','Routing','45677',2022);
const arr=[emp1,emp2,emp3];
arr.forEach((val)=>{
    val.displayDetails();
    val.expInYears();
})

console.log(emp1);
