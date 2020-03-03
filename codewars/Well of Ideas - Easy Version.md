### Well of Ideas - Easy Version [8 kyu]


#### Answer -

```js

let well = (x) => {
  let len = x.filter(el => el==="good").length;
  switch(len) {
    case 1 : return 'Publish!';
    case 2 : return 'Publish!';
    case 0 : return 'Fail!';
    default : return 'I smell a series!';
  }
}

```