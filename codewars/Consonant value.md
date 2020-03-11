### Consonant value [6 kyu]


#### Answer -

```js

function solve(s) {

  let sum = 0;
  let max = 0;
  let vowel = "aeiou";
  
  for(let i = 0; i < s.length; i++) {
    
    if(!vowel.includes(s[i])) {
      sum += (s.charCodeAt(i) - 96);
      
    } else {
    
        if(max < sum) {
          max = sum;
        }
        
        sum = 0;
      }
      
    }
    
    if(sum > max) {
      return sum;
    } else {
        return max;
    }
    
  }


```