### Split Strings [6 kyu]

#### Answer -

```js

function solution(str){
 let ans = [];
 
 if(str.length % 2 !== 0) {
   str += "_";
 }
 
 for(let i = 0; i < str.length; i += 2) {
   ans.push(str.slice(i,i+2));
 }
  return ans;
}


```