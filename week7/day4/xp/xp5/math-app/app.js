const _ = require('lodash');
const { add, multiply } = require('./math');
const sum = add(10, 5);
const product = multiply(10, 5);
const numbers = [1, 2, 3, 4, 5];
const sumWithLodash = _.sum(numbers);
const productWithLodash = _.reduce(numbers, (total, num) => total * num, 1);

console.log(`Sum using custom module: ${sum}`);
console.log(`Product using custom module: ${product}`);
console.log(`Sum using lodash: ${sumWithLodash}`);
console.log(`Product using lodash: ${productWithLodash}`);
