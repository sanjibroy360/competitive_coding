### First non-repeating character [5 kyu]

#### Answer -

```js 

function firstNonRepeatingLetter(s) {
  let str = s;
  s = s.toLowerCase();
  let temp = s.split("").filter(el=>s.indexOf(el)===s.lastIndexOf(el));
  let ans = temp[0];
  if(!ans) {
    return "";
  }
  ans = str.includes(ans) ? ans : ans.toUpperCase();
  return ans;
}

```