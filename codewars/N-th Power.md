### N-th Power [8 kyu]

#### Answer -

```js

let index = (array, n) => (array.length <= n || n < 0) ? -1 : Math.pow(array[n], n)

```