### Filling an array (part 1) [8 kyu]

#### Answer -

```js

const arr = n => {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
};

```