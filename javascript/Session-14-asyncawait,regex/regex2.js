const pattern=/[a-zA-Z]/;

console.log(pattern.test('SONaM'));
console.log(pattern.test('SONAM'));
console.log(pattern.test('sonam'));
console.log(pattern.test('123'));

const pattern1=/[A-Z]{1}[a-z]/;
console.log(pattern1.test('Sonam'));
console.log(pattern1.test('sonam'));

const pattern2=/[a-z]at/;
console.log(pattern2.test('caaa'));
console.log(pattern2.test('bat'));
console.log(pattern2.test('tat'));
console.log(pattern2.test('Aat'));