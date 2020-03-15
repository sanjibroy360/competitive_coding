### Javascript filter - 1 [7 kyu]

#### Answer -

```js

function searchNames( logins ){
  return logins.filter(el=> el[0].endsWith("_"));
}

```