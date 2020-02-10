### Dubstep [6 kyu]

#### Answer - 

```js 

function songDecoder(song){ 
  let ans = song.split("WUB").filter(el=>el!=="").join(" ");
  return ans;
}

```