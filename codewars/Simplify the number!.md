### Simplify the number! [6kyu]

#### Answer -

```js

function simplify(number){
//You can do this!
  let num = number;
  let len = (number + "").length;
  let str = '';
  let i = 0;
  let numStr = (num+"");
  
  while(num > 0) {
    let ten = 10 **((num + "").length - 1);
    
    if(!str) {
      str += `${numStr[i]}`;
        if(ten > 1) {
          str += `*${ten}`;
        }
    } else if(numStr[i]!=0){
        str += `+${numStr[i]}`;
        if(ten > 1) {
          str += `*${ten}`;
        }
    }
    num = Math.floor(num / 10);
    i++;
  }
  str += num % 10 ? `${num % 10}` : '';
  return str;
}

```