//Sum of Two Integers [6 kyu]


/*

Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes-
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .

*/

// Answer -

function add(x, y) {

  while(y) {
    let carry = x & y;
    x ^= y;
    y = carry << 1;
  }
  return x;
}