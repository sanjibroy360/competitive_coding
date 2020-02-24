### Growth of a Population [7 kyu]

#### Answer -

```js

function nbYear(p0, percent, aug, p) {
  let count = 0;
  while(p > p0) {
    p0 = p0 + ( p0 * (percent / 100) ) + aug;
    count++;
  }
  return count;
}


```



