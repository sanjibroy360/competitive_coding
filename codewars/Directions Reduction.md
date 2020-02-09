### Directions Reduction [5 kyu]

``` js 

function dirReduc(arr){
  let ans = [];
  let dir = {
    NORTH : "SOUTH",
    SOUTH : "NORTH",
    EAST : "WEST",
    WEST : "EAST"
  }

  for(let i = 0; i < arr.length; i++) {
    if(ans[ans.length - 1] !== dir[arr[i]]) {
      ans.push(arr[i]);
    } else {
      ans.pop();
    }
  }
  return ans;
}


```