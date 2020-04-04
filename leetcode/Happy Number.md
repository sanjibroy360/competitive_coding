### Happy Number [6 kyu]

#### Answer -

```js

var isHappy = function(n) {
  let step = 0;
  let num = n;
  var sum = n;
  let a = 0;
  let arr = [];
  
 
  while(sum !== 0) {
    
    num = sum;
    sum = 0;
      
    while(num > 0) {
      
      a = Math.floor(num % 10);
      sum += a ** 2;
      num = Math.floor(num / 10);
    }
    
    if(sum == 1) {
      return true;
    } 
    
    if(arr.includes(sum)) {
      break;
    } else {
        arr.push(sum);
    }
  }
  
  return false
};

```