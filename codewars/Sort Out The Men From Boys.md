### Sort Out The Men From Boys [7 kyu]

#### Answer - 

```js

function menFromBoys(arr){
  let sorted=[];
  let men=arr.filter(el=>el%2===0);
  let boys=arr.filter(el=>el%2!==0);
  men.sort((a, b) => b-a); 
  boys.sort((a, b) => b-a); 
  
  men.map(el=>sorted.unshift(el));
  boys.map(el=>sorted.push(el));
  
  return [...new Set(sorted)];
}

```