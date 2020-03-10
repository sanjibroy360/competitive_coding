### Sort Arrays (Ignoring Case) [6 kyu]

#### Answer -

```js

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
   let ans = [];
   let arr = names.map(el => el.toUpperCase());
   arr.sort();
  
   
  for(let i= 0; i < names.length; i++) {
    
      for(let j = 0; j < names.length; j++) {
        
        if(arr[i]===names[j].toUpperCase()) {
          ans.push(names[j]);
          
        }
      }
  }
  return ans;
}


```