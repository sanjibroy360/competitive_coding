### Are all elements equal? [6 kyu]

#### Answer -

```js

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
    if(!this[0]) {
    return true;
  } else {
      return this == this[0].repeat(this.length) ;
  }
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
   return !this.map(el => this.every(x =>x === el)).includes(false);
} } );

```