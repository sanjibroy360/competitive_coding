#### Fixed length palindromes [6 kyu]

#### Answer -

```js

function palin(a,b){
  let start = 10 ** Math.floor((a - 1)/2);
  let second = "";
  let first = start;
  
  for(let i = 1; i < b; i++) {
    first++;
  }
  
  first += ""; 
  
  if(a % 2) {
    second = first.slice(0,first.length-1).split("").reverse().join("") ;
  } else {
    second = first.split("").reverse().join("") ;
  }
  return  +(first+second);
};

```