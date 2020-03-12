### String transformer [6 kyu]

#### Answer - 

```js

function stringTransformer(str) {
  let revStr = str.split(" ").filter(el => el!==" ").reverse().join(" ");
  return revStr.split("").map(el=> el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join("");
}

```