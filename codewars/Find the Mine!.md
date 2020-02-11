### Find the Mine! [6 kyu]

#### Answer -

```js 

function mineLocation(field){
  let posI = 0;
  let posJ = 0;
  for(let i = 0; i < field.length; i++) {
    if(field[i].indexOf(1) !== -1) {
      posI = i;
      posJ = field[i].indexOf(1);
    }
  }
  return [posI,posJ];
}

```