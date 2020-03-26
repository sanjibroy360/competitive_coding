### Balance the arrays [6 kyu]

#### Answer

```js

function longest(arr, n) {
  let ans = [];
  let rankList = arr.reduce( (acc, cv) => {
    
    let temp = [];
    
    if(acc[cv.length]) {
      temp = acc[cv.length];
      temp.push(cv)
      acc[cv.length] = temp;
    } else {
      acc[cv.length] = [cv];
    }
    
    return acc;
  },{} );
    
  let sortRankList = Object.keys(rankList).sort((a,b) => b-a);
  
  for(let i = 0; i < n; i++) {
     ans = ans.concat(rankList[+sortRankList[i]]);
  }
  return ans[n-1];
}

```