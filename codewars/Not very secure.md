### Not very secure [5 kyu]

#### Answer - 

```js

function alphanumeric(string){
  let flag = false;
  
  if(!string) {
    return false;
  }
  
  for(let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    flag = false;
    switch(ascii > 0) {
      case (ascii >= 48 && ascii <=57) : 
      case (ascii >= 65 && ascii <= 90) :
      case (ascii >= 97 && ascii <=122):  flag = true;
    }
    if(!flag) {
      return false;
    }
  }
  return flag;
}

```
