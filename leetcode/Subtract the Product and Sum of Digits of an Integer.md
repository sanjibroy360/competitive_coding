### 1281. Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

#### Answer -

```js 

var subtractProductAndSum = function(n) {
  n = n.toString().split("");
  let sum = n.reduce( (acc, cv) => acc + +cv, 0);
  let prod = n.reduce( (acc, cv) => acc * cv, 1);
  return prod - sum;
}

```