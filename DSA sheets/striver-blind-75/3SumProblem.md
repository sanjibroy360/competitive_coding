# Find 3 Numbers that Sum to a Target

You are given an array of integers `arr` and a target integer `target`. Your task is to find all unique triplets in the array that sum up to the target value.

Write a function `findThreeSum(arr, target)` that:

1. Takes in two inputs:
   - `arr`: An array of integers.
   - `target`: A single integer representing the target sum.
2. Returns an array of all unique triplets `[arr[i], arr[j], arr[k]]` such that:
   - `i`, `j`, and `k` are distinct indices.
   - `arr[i] + arr[j] + arr[k] = target`.
3. The solution should not contain duplicate triplets, meaning no two triplets in the result should contain the same set of numbers in any order.

### Example:

```js
Input: arr = [2, 6, 4, 5, 8, 11, 12, 3, 4, 7, 7, 0];
target = 14;

Output: [
  [0, 2, 12],
  [0, 3, 11],
  [0, 6, 8],
  [0, 7, 7],
  [2, 4, 8],
  [2, 5, 7],
  [3, 4, 7],
  [3, 5, 6],
  [4, 4, 6],
];
```

# Solution

```js
const find3Sum = (arr, target) => {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw "Invalid array";
  }

  if (target === null || isNaN(+target)) {
    throw "Invalid target value";
  }

  arr.sort((a, b) => a - b); // Sort in ascending order
  let results = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const leftVal = arr[left];
      const rightVal = arr[right];
      const currentVal = arr[i];

      const sum = leftVal + rightVal + currentVal;

      if (sum === target) {
        const result = [currentVal, leftVal, rightVal];
        results.push(result); // If only one triplet is required, you can return it directly

        while (left < right && arr[left] === arr[left + 1]) left++; // To avoid duplicates
        while (left < right && arr[right] === arr[right - 1]) right--; // To avoid duplicates
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  results = Array.from(new Set(results));
  console.log(results);
  return results;
};

let arr = [2, 6, 4, 5, 8, 11, 12, 3, 4, 7, 7, 0];
let target = 14;

find3Sum(arr, target);
```
