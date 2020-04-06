### Move Zeroes

#### Answer -

```js

var moveZeroes = function(nums) {
  
  let count = 0;
  
  for(let i = 0; i < nums.length; ) {
     
      if(!nums[i]){
          
          count++;
          
          nums.push(nums[i]);
          nums.splice(i,1);
         
          if(count == nums.length) {
            break;
          }
          
      } else {
         i++;
      }
  }
    
  return nums;  
};

```
