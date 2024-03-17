const pattern=/hello/ ;

console.log(pattern.test('hello')); //true
console.log(pattern.test('hello 123')); //true
console.log(pattern.test('hello world')); //true
console.log(pattern.test('world')); //false

const input="world";
if(pattern.test(input)){
    console.log('Pattern Matched');
}else{
    console.log('Your data must starts with hello');
}