### Break camelCase [6 kyu]

#### Answer -

```js

function solution(string) {
 let str = "";
 for(let i = 0; i < string.length; i++) {
   if(string.charCodeAt(i) <= 90) {
     str += " " + string[i];
   } else {
       str += string[i];
   }
 }  
 return str;
}

```