### Playing with digits [6kyu]

#### Answer 

```js

function digPow(n, p){
  let numStr = (n+"").split("");
  let power = 0;
  let sum = 0;
  for(let i = 0; i < numStr.length; i++) {
    power = p + i;
    sum += Number(numStr[i])**(power);
    
  }
  if(sum % n == 0) {
    return Math.floor(sum / n);
  } else {
      return -1;
  }
}


```