# Two Sum : Check if a pair with given sum exists in Array

Problem Statement: Given an array of integers arr[] and an integer target.

* 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

* 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

# Solution

## Using Hashmap

```js
const find2Sum = (arr, target) => {
  const lookupObj = {};
  const indexLookupObj = {};

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (lookupObj[val]) {
      console.log([val, lookupObj[val]]); // Will print values
      console.log([i, indexLookupObj[val]]); // Will print indices

      return "Yes";
    }
    const gap = target - val;
    lookupObj[gap] = val;
    indexLookupObj[gap] = i;
  }

  return "No";
};

let arr = [2, 6, 5, 8, 11];
let target = 14;

find2Sum(arr, target);
```

## Two pointers approach

```js
const find2Sum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      console.log([arr[left], arr[right]]);
      return "Yes";
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return "No";
};

let arr = [2, 6, 5, 8, 11];
let target = 14;
```
