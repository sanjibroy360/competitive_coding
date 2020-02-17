### IQ Test [8 kyu]

#### Answer -

```js

let iqTest = (numbers) =>{
 numbers = numbers.split(" ");
 let even = numbers.filter(el => el % 2 === 0);
 let odd = numbers.filter(el => el % 2 !== 0);
 return even.length > odd.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;
 
}

```