### Does my number look big in this? [6 kyu]

#### Answer -

```js

function narcissistic(value) {
  // Code me to return true or false
  if( isNaN(+value) || !value) {
    return false;
  } 
  
  let pow = (value + "").length;
  let str = value + "";
  let sum = str.split("").reduce( (acc, cv) => {
    acc += cv ** pow;
    return acc;
  },0);
  
  return sum == value;
}

```