### How good are you really? [8 kyu]

#### Answer -

```js

let betterThanAverage = (classPoints, yourPoints) => ( classPoints.reduce( (acc, cv) => acc + cv, 0) / classPoints.length ) <= yourPoints;

```
  