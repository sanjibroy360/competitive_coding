### Sum of positive [8 kyu]

#### Answer -

```js

let positiveSum =(arr) => arr.reduce(function(acc, cv) { return cv >= 0 ? acc + cv : acc},0);

```