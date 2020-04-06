### Almost Even [6 kyu]

#### Answer -

```js

var splitInteger = function(num, parts) {

  let each = num / parts;
  let rem = num % parts;
  let ans = [];
  let i;
  
  for(i = 0; i < parts; i++) {
    ans.push(Math.floor(each));
  }
  
  if(!rem) {
    return ans;
  }

  while(rem) {
    ans[i-1] += 1;
    rem--;
    i--;
    if(i==0) {
      i = parts - 1;
    }
  }
  return ans;
}

```