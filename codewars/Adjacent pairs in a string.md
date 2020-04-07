### Adjacent pairs in a string [ 6 kyu ]

#### Answer -

```js

function countAdjacentPairs(str) {
   let arr = [];
   
   return str.split(' ').reduce( (acc, cv) => { 
    cv = cv.toUpperCase();
    
    if(!arr) {
      arr.push(cv);
    } else if(cv == arr[arr.length - 1]){
        ++acc;
        arr.pop();
    } else {
        arr.push(cv);
    }
    
    return acc;
  },0);
   
}

```