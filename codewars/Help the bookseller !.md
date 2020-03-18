### Help the bookseller ! [6 kyu]

#### Answer -

```js

function stockList(books, lc){
  if(!books.length) {
    return '';
  }
  let obj = lc.reduce( (acc, cv) => {
    acc[cv] = 0;
    return acc;
  },{});
  
  let ans = "";
  let arr = books.join(" ").split(" ") ;
  for(let i = 0; i < arr.length; i+=2) {

    if(lc.includes(arr[i][0])) {
       obj[arr[i][0]] = (+obj[arr[i][0]]) + (+arr[i+1]);
    }
  }
  
  for(let key in obj) {
    ans +=` (${key} : ${obj[key]}) -` ;
  }
  ans = ans.slice(0,-1);
  return ans.trim();
} 

```