### Duplicate Encoder [6 kyu]

#### Answer -

```js

function duplicateEncode(word){
    word = word.split("");
    return word.reduce( (acc, cv) => {
      if(word.filter(el =>el.toUpperCase()===cv.toUpperCase()).length > 1) {
        acc += ")";
      } else {
          acc += "(";
      }
      return acc;
    }, "")
}

```