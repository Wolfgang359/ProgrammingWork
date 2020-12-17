```
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0

```





























```JavaScript
const countVowels = function(word) {
    const vowels = ['a','e','i','o','u'];
    let numOfVowels = 0;
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            numOfVowels += 1;
        }
    }

    return numOfVowels;
}
```