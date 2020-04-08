### Making Change [6 kyu]

#### Answer -

```js

const makeChange = (amount) => {
  
  
  let obj = {};
  let flag = 0;
  
  if(amount >= 50) {
    obj.H = Math.floor(amount / 50);
    amount = amount - (obj.H * 50);
  } 
  
  if(amount >= 25) {
    obj.Q = Math.floor(amount / 25);
    amount = amount - (obj.Q * 25);
  }
  
  if(amount >= 10) {
    obj.D = Math.floor(amount / 10);
    amount = amount - (obj.D * 10);
  }
  
  if(amount >= 5) {
    obj.N = Math.floor(amount / 5);
    amount = amount - (obj.N * 5);
  }
  
  if(amount >= 1) {
    obj.P = Math.floor(amount);
  }  
  
  return obj;
  
};

```