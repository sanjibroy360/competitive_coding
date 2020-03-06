### Calculate BMI [8 kyu]

### Answer - 
```js

function bmi(weight, height) {
  let bmi = weight /(height ** 2);
  switch(true) {
    case (bmi <= 18.5) : return "Underweight";
    case (bmi <= 25.0) : return "Normal";
    case (bmi <= 30.0) : return "Overweight";
    default : return "Obese";
  }
}

```