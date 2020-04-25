// What's a Perfect Power anyway? [5 kyu]


/*

A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

Examples
Test.describe("perfect powers", function(){
  Test.it("should work for some examples",function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
  });
});

*/

function GCD(n, m) {
    if (m == 0) {
        return n;
    }
    return GCD(m, n % m);
}

var isPP = function (n) {
    let num = n;
    let arr = [];
    for (let i = 2; i <= n * n; i++) {
        while (n % i == 0) {
            n = n / i;
            arr.push(i);
        }
    }
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let a = []
    for (let key in obj) {
        a.push(obj[key]);
    }
    let gcd = a[0];
    for (let i = 1; i < a.length; i++) {
        if (gcd >= a[i]) {
            gcd = GCD(gcd, a[i])
        } else {
            gcd = GCD(a[i], gcd);
        }
    }
    if (gcd == 1) {
        return null;
    }
    let ans = 1
    for (let key in obj) {
        ans *= Math.pow(key, obj[key] / gcd);
    }
    return [ans, gcd]; // fix me 
}