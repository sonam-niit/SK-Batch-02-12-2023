const array = ['hello world', 'skill academy', 'gravity classes', 'champion test'];

for (let str of array) {
    console.log('-----------------------------');
    console.log(str);
    console.log(str.length);
    console.log(str.charAt(3));
    console.log(str.concat(' everyone..!!'));
    console.log(str.endsWith('world')); //true
    console.log(str.startsWith('hello')); //true
    console.log(str.replace('hello', 'welcome'));
    console.log(str.slice(3));
    console.log(str.slice(3, 7));
    console.log(str.toUpperCase());
    console.log(str.split(' '));
}