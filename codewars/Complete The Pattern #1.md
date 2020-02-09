### Complete The Pattern #1 [7 kyu]


```js 

function pattern(n) {
 var output;
 
 if(n < 1) {
   return "";
 }
 
 for(let i = 1; i <= n; i++) {
   for(let j = 1; j <= i; j++) {
     if(i==1) {
       output = i.toString();
     } else {
         output += i.toString();
     }
   }
   if(i===n) {
     break;
   }
   output += "\n";
 }
 return output;
}

```