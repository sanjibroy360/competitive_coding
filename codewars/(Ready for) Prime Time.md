### (Ready for) Prime Time [5kyu]

#### Answer -

```js

function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  let ans = [];
  for(let i = 2; i <= num; i++) {
    let flag = 0;
    for(let j = 2; j <= Math.sqrt(i); j++) {
      if(i % j == 0) {
        flag = 1;
        break;
      }
    }
    if(!flag) {
      ans.push(i);
    }
  }
  return ans;
}

```