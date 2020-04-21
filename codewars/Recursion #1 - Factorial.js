// Recursion #1 - Factorial [7 kyu]

/*
You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/


// Answer:

const factorial = n => {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};