### Round by 0.5 steps [6 kyu]

#### Answer -

```js

function solution(n){
  let fr = (n - Math.floor(n))*10;
  fr = Math.round(fr);
  if(n % 0.5 === 0) {
    return n;
  }
  if((5 - fr) >= 0) {
    if( (5 - fr) <= 2) {
      return Math.floor(n)+0.5;
    } else {
        return Math.floor(n);
    }
  } else {
      if( (fr - 5) >= 3) {
        return Math.floor(n)+1;
      } else {
          return Math.floor(n)+0.5;
      }
  }
  
}

```