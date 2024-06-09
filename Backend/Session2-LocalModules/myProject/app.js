//imported as an object
import { add, mul, sub } from "./module1.mjs";
//imported as default function
import specialFuction, { hello } from "./module2.mjs";
import { Student } from "./modules.mjs";

console.log(add(2,3));
console.log(sub(9,3));
console.log(mul(9,3));
specialFuction();
hello();

const obj1= new Student(1,'Sonam');