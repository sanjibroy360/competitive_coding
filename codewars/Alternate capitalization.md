### Alternate capitalization [7 kyu]

#### Answer -

```js

let capitalize = (s) => s.split("").reduce( (acc, cv,i) => {
    !(i & 1) ? acc[0]+=cv.toUpperCase() : acc[0]+=cv;
    (i & 1) ? acc[1]+=cv.toUpperCase() : acc[1]+=cv;
  return acc;
}, ["",""])

```