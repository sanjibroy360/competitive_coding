### ROT13 [5 kyu]

#### Answer -

```js

function rot13(msg){
  return msg.split("").reduce((acc, cv, i) => {
    
      
      if(msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <=90) {
        plus = msg.charCodeAt(i) + 13 > 90 ? 64 + ((msg.charCodeAt(i) + 13) - 90) : msg.charCodeAt(i)+13;
        acc += String.fromCharCode(plus);
        
      } else if(msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122){
         
          plus = msg.charCodeAt(i) + 13 > 122 ?  96 + ((msg.charCodeAt(i) + 13) - 122) : msg.charCodeAt(i)+13; 
          acc += String.fromCharCode(plus);
      } else {
          acc += cv;
      }
      
    return acc;
  
  },"");

  ```
#