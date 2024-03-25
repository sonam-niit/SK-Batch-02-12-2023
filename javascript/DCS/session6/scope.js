let x=100; //global
const pi=3.14; //global
var z='Zebra'; //global

function test() {

    var brand='Skill Academy';
    if (true) {
        var name = 'sonam soni';
        let a=10;
    }

    console.log('Name: '+name);
    //console.log('A: '+a); //no access to block scope
    console.log('Brand: '+brand);
}
test();