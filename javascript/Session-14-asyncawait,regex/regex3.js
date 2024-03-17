const pattern=/[6-9]{3}-[0-9]{3}-[0-9]{4}/;

console.log(pattern.test('977-123-5674'));
console.log(pattern.test('976-123-5674'));

const pattern1=/^[A-Z]+/
console.log(pattern1.test('Sona123'));//TRUE
console.log(pattern1.test('5ona123'));//FALSE