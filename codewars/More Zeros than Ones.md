### More Zeros than Ones [6 kyu]

#### Answer -

```js

function moreZeros(s){
  let binary = [];
  let convertObj = {};
  for(let i = 0; i < s.length; i++){
    let binaryCode = s[i].charCodeAt(0).toString(2);
    convertObj[binaryCode] = s[i];
    binary.push(binaryCode);
  }
 
  let ans = binary.reduce( (acc, el) => {
    let zeros = el.split("").filter(zeroEl => zeroEl==0).length;
    let ones = el.split("").filter(oneEl => oneEl==1).length;
    if( (zeros > ones) && !acc.includes(el) ) {
      acc.push(el);
    }
    return acc;
  },[]);
  ans = ans.map(el => convertObj[el])
  return ans;
}

```