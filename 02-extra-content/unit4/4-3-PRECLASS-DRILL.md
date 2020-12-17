```
Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3

```






















```JavaScript
const findMax = (nums) => nums.reduce((num, max) => (num > max) ? num : max, 0);
```

```JavaScript
function findMax(nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}
```