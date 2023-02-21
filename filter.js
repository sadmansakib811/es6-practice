// filter
const numbers = [12,5,23,45,11,18,9,55,61,1];
//search the number bigger than 20 using filter
const bigNumb = numbers.filter(number => number > 20);
console.log(bigNumb);

// search the number smaller than 20
const smallNums = numbers.filter(smallnum => smallnum < 20);
console.log (smallNums);
// use filter in array like object
const products = [
    {id:1, name: 'laptop', price:65000},
    {id:2, name: 'mobile', price:85000},
    {id:3, name: 'watch', price:15000},
    {id:4, name: 'tablet', price:55000},
]
// show the products which price are less than 60000.
const expensive = products.filter(product => product.price < 60000);
console.log(expensive);
