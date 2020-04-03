### Basics 08: Find next higher number with same Bits (1's)  [6 kyu]

#### Answer -

```js

function nextHigher(n) {
  
  let num = n;
  let max = num.toString(2);
  
  
  let ones = (n.toString(2)).split("").filter(el => el==='1').length;
  let len = num.toString(2).length;
  let maxval;
  for(let i = n+1; max.length === len; i++) {
    maxval = +parseInt(max, 2).toString(10);
    let current = i.toString(2);

    if( (max.split("").filter(el => el==='1').length) === (current.split("").filter(el => el==='1').length) && maxval < i) {
      max = current;
      maxval = i;
      break;
    }
  }
  
  return maxval;
}

```