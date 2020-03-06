### Pirate treasure chest codes [6 kyu]

#### Answer -

```js

function treasureCode(clue) {
  let i;
  let gcd;
  let no = "";
  let arr = [];
  let nums = [];
  let str = "";
  let ans = "";
  clue = clue.split("");
  
  for(let i = 0; i <= clue.length; i++) {
    if(!isNaN(+clue[i])) {
      
      str += clue[i];

    } else {
        
        if(str !== "") {

            nums.push(+str);
            str = "";
        }
    }
  }

  let max = Math.max.apply(Math, nums);
  
  for(i = 1; i < max; i++) {
    if(nums.every(el => !(el % i) )) {
       arr.push(i);
    }
  }

  gcd = Math.max.apply(Math, arr);
  
  for(let i = 0; i < clue.length; i++) {
    if(!isNaN(+clue[i])){
      no += clue[i]
    } else {
      
      if(no !== ""){
        ans += (+no / gcd) + "";
        no = "";
      }
      ans += clue[i];
    }
    
  }
 
  if(no !== ""){
        console.log(no);
        ans += (+no / gcd) + "";
        no = "";
      }
  return ans;
}


```