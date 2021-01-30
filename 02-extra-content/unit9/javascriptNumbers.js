const integer = 1;
const floats = 0.1;
const floats2 = 0.2;
const nan = NaN;
const sum = 0.1 + 0.2;

console.log(sum);

console.log(Math.floor(sum));

console.log(Math.floor(sum).toFixed(2));

console.log(sum.toFixed(2));

console.group('FLOATING WEIRDNESS BELOW');
for (let i = 0; i <= 20; i++) {
    console.log(Math.fround(5.05));
}
console.groupEnd();