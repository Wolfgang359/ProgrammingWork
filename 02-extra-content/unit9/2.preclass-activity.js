const deduper = function(numArr) {
    const newArr = [];
    numArr.forEach(item => {
        if (!newArr.includes(item)) newArr.push(item);
    })

    return newArr;
}


console.log(deduper([1, 2, 2, 3]));


const createUnique = (numArr) => numArr.reduce((newArr, item) => (!newArr.includes(item))
    ? newArr.concat(item)
    : newArr,
    []);

console.log(createUnique([1, 2, 2, 3]));

const someArr = [1, 2, 2, 3]; // 8

console.log(someArr.reduce((sum, num) => sum + num, 0));

let sum = 0;
sum = 0 + 1;
sum = 1 + 2;
sum = 3 + 2;
sum = 5 + 3;
console.log(sum);

const secondArr = [4, 5, 4, 4, 7, 5];
const createUniqueFilter = (numArr) => numArr.filter((item, index) => numArr.indexOf(item) === index);

console.log(createUniqueFilter(someArr));
console.log(createUniqueFilter(secondArr));
