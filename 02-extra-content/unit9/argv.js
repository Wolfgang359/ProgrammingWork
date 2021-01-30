const input = process.argv;

console.log(input);

const num = process.argv[2];

const [, , num1, num2] = process.argv;

const [, , ...nums] = process.argv;

console.log('line 5', num);

console.group('line 7');
console.log(num1);
console.log(num2);
console.groupEnd();
console.log('line 9', nums);


const sum = parseFloat(num1) + parseFloat(num2);
const sum2 = parseInt(num1) + parseInt(num2);

console.log(sum);
console.log(sum2);
