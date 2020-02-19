### Sum of numbers from 0 to N [7 kyu]

#### Answer -

```js

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count < 0) {
      return `${count}<0`;
    }
    let sum = 0;
    let str = "";
    let i;
    for(i = 0; i < count; i++) {
      str += i + "+";
      sum += i;
    }
    sum += count;
    str += count ? (i + " = " + sum) : `${i}=${i}`; 
    return str;
  };

  return SequenceSum;

})();

```
