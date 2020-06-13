// Simple square numbers [6 kyu]

/*

In this Kata, you will be given a number n (n > 0) and your task will be to return the smallest square number N (N > 0) such that n + N is also a perfect square. If there is no answer, return -1 (nil in Clojure, Nothing in Haskell).

solve(13) = 36
because 36 is the smallest perfect square that can be added to 13 to form a perfect square => 13 + 36 = 49

example:

solve(3) = 1 // 3 + 1 = 4, a perfect square
solve(12) = 4 // 12 + 4 = 16, a perfect square
solve(9) = 16 
solve(4) = -1

*/

// Answer -

function solve(n) {
  for (let i = 1; i < n; i++) {
    let x = Math.sqrt(i ** 2 + n);

    if (x == Math.floor(x)) {
      return i ** 2;
    }
  }
  return -1;
}
