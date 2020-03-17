### Title Case [6 kyu]

#### Answer-

```js

function titleCase(title, minorWords = '') {
  if(!title) {
    return title;
  }
  let first = title.split(" ")[0].slice(0,1).toUpperCase() + title.split(" ")[0].slice(1).toLowerCase();
  
  let remain = title.split(" ").slice(1);
  remain = remain.reduce( (acc, cv) => {
   
  if( ( !minorWords.toLowerCase().split(" ").includes(cv.toLowerCase() ) || !minorWords )  && cv) {
    acc.push(cv.slice(0,1)[0].toUpperCase() + cv.slice(1).toLowerCase());
  } else {
    acc.push(cv.toLowerCase());
  }
  return acc;
  },[] ).join(" ");
  
  
  return title.split(" ").length > 1 ? first.trim()+" "+remain.trim() : first.trim()+remain.trim();
}


```