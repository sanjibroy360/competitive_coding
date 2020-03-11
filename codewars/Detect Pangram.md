### Detect Pangram [6 kyu]


#### Answer -

```js

function isPangram(str){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha.split("").every(alphabet => str.toLowerCase().includes(alphabet));
}

```