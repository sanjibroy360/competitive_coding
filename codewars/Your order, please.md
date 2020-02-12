### Your order, please [6 kyu]

#### Answer -

```js

function order(words){
  let str = "";
  let ans = [];
  let pos = 0;
  words = words.split(" ");
  
  for(let i = 0; i < words.length; i++) {
    let word = words[i].slice(0);
    let cw = words[i].split("");
    for(let j = 0; j < cw.length; j++) {
      if( isNaN(+cw[j]) ) {
        str += cw[j];
      } else {
          pos = cw[j];
          
          ans[pos] = word;
      }
    }
    str = "";
  }
  return ans.join(" ").trim()
}

```