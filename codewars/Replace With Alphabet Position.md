#### Replace With Alphabet Position [6 kyu]

#### Answer -

```js

function alphabetPosition(text) {
    
  text = text.toLowerCase();
  let ans = "";
  for(let i = 0; i < text.length; i++) {
    if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      ans += text.charCodeAt(i) - 96 + " ";
    }
  }
  return ans.trim();
}

```