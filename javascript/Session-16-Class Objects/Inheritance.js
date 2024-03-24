class BaseModel{

    constructor(modelNo){
        this.modelNo=modelNo
    }
    display(){
        console.log(`Model No: ${this.modelNo}`);
    }
}

class TopModel extends BaseModel{
    constructor(modelNo,extra){
        super(modelNo); //pass to parent class constructor
        this.extra=extra;
    }
    displayDetails(){
        console.log("Extra Details "+this.extra);
    }
}

const sonam= new BaseModel(2024);
const rituraj= new TopModel(2024,'360 degree Camera');
sonam.display();
rituraj.display(); //child can access all properties of parent class
rituraj.displayDetails();