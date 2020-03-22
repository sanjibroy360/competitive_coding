### Ranking System [6 kyu]

#### Answer -

```js

function rankings(arr){
  let rank = 1;
  let rankArr = arr.slice(0);

  rankArr = rankArr.sort( (a, b) => b -a );
  
  let rankList = rankArr.reduce((acc, cv) => {
    acc[cv] = rank++;
    return acc;
  },{});
  
  let ans = arr.map(el => rankList[el]);
  
  return ans;
}

```