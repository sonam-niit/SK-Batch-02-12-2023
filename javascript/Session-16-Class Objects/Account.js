class Account{
    constructor(accNo,holderName,balance){
        this.accNo=accNo;
        this.holderName=holderName;
        this.balance=balance;
    }
    display(){
        console.log("-----------------------------");
        console.log(`Account No: ${this.accNo}`);
        console.log(`Account Hoder's Name: ${this.holderName}`);
        console.log(`Available Balance: ${this.balance}`);
    }
    diposit(amount){
        this.balance+=amount;
        console.log(`Your account is credited by ${amount}, your available balance is ${this.balance}`);
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log(`Your account is debited by ${amount}, your available balance is ${this.balance}`);
        }else{
            console.log(`No sufficient balance available to withdraw`);
        }
    }
}

const sonamAcc=new Account('SBI000001','SONAM SONI',5000);
sonamAcc.display();
sonamAcc.diposit(10000);
sonamAcc.withdraw(30000);
sonamAcc.withdraw(15000);
