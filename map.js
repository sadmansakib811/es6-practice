const numbers = [2,8,4,6,3];
const output = [];
const doubleIt = numbers.map((number)=>number*2);
console.log(doubleIt);

const halfIt = numbers.map(number=>number/2);
console.log(halfIt);

// map with string

const friends= ['nusrat', 'chamok','azad', 'marfua'];
const firstLetter = friends.map(friend=> friend[0]);
console.log(firstLetter); //output: [ 'n', 'c', 'a', 'm' ]
//array string length
const nameLength = friends.map(friend=> friend.length);
console.log(nameLength);

//array obj

const products = [
    {id:1, name: 'laptop', price:4500},
    {id:1, name: 'mobile', price:8500},
    {id:1, name: 'watch', price:1500},
    {id:1, name: 'tablet', price:3500},
]

const item = products.map(product => product.name);
console.log(item);