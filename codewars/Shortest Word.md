### Shortest Word [7 kyu]

#### Answer -

```js 

let findShort = str => str.split(" ").reduce( (acc, cv) => cv.length < acc ? cv.length : acc, Number.MAX_VALUE )

```