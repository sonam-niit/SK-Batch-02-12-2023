//functional constructor
function Person(name,email,country){
    this.name=name;
    this.email=email;
    this.country=country;
}
//its prototype
Person.prototype.getData=()=>{
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Country: ${this.country}`);
}

const sonam= new Person('Sonam Soni','sonam@gmail.com','India');
sonam.getData();