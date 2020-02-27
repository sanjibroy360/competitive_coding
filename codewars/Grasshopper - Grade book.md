### Grasshopper - Grade book [8kyu]


#### Answer -

```js

function getGrade (s1, s2, s3) {
  let mean = (s1 + s2 + s3) / 3;
  
  switch(mean <= 100) {
    case (mean <= 100 && mean >= 90) : return 'A';
    case (mean >= 80 && mean < 90) : return 'B';
    case (mean >= 70 && mean < 80) : return 'C';
    case (mean >= 60 && mean < 70) : return 'D';
    case mean < 60 : return 'F'
  }

}

```