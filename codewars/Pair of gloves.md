### Pair of gloves [6 kyu]

#### Answer -

```js

function numberOfPairs(gloves)
{
  let pair = 0;
  gloves.reduce( (acc, cv) => {
    if(!acc) {
      acc.push(cv);
    } else {
        let accIndex = acc.indexOf(cv);
        if(accIndex !== -1) {
          pair++;
          acc.splice(accIndex, 1);
        } else {
            acc.push(cv);
        }
    }
    return acc;
  },[])
  return pair;
}

```