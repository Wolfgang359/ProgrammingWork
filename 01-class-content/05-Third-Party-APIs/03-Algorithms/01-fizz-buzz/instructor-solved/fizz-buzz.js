// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
    arr.forEach((num) => {
        if (num % 15 === 0) {
            console.log('Fizz Buzz');
        } else if (num % 3  === 0) {
            console.log('Fizz');
        } else if (num % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        }
    });
};

const printFizzBuzz = (arr) => arr.forEach((num) => (num % 15 === 0) ? console.log("Fizz Buzz") : (num % 3 === 0) ? console.log('Fizz') : (num % 5 === 0) ? console.log('Buzz') : console.log(num));


// var fizzBuzz = function (arr) {
//     arr.forEach((num) => {
//         if (num % 15 === 0) {
//             console.log('Fizz Buzz');
//         } else {
//             if (num % 3 === 0) {
//                 console.log('Fizz');
//             } else {
//                 if (num % 5 === 0) {
//                     console.log('Buzz');
//                 } else {
//                     console.log(num);
//                 }
//             }
//         }
//     });
// };