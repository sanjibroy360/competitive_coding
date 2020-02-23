### Form The Minimum [7 kyu]

#### Answer -

```js

function minValue(values){
  values.sort( (a, b) => a - b);
  return +values.reduce( (acc, cv) => {
    if(!acc.includes(cv)){
      acc += cv;
    }
    return acc;
  }, "");
}

```