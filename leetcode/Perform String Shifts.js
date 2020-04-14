// Perform String Shifts

/*

You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0(for left shift) or 1(for right shift).
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

-------------------

    Example 1:

Input: s = "abc", shift = [[0, 1], [1, 2]]
Output: "cab"

Explanation:

[0, 1] means shift to left by 1. "abc" -> "bca"
[1, 2] means shift to right by 2. "bca" -> "cab"

-------------------

    Example 2:

Input: s = "abcdefg", shift = [[1, 1], [1, 1], [0, 2], [1, 3]]
Output: "efgabcd"

Explanation:

[1, 1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1, 1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0, 2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1, 3] means shift to right by 3. "abcdefg" -> "efgabcd"
*/


// Answer :-

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {

    let str = '';
    let l = [], r = [];

    let obj = {
        left: 0,
        right: 0
    };


    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0]) {
            obj.right += shift[i][1];

        } else {
            obj.left += shift[i][1];

        }
    }

    let last = s.length - 1;
    let diff = Math.abs(obj.left - obj.right);

    if (diff > s.length) {
        diff = (diff % s.length);
    }

    if (!diff) {
        return s;
    }

    if (obj.left > obj.right) {

        str = s.slice(diff) + s.slice(0, diff);
        return str;

    } else {

        str = s.slice(-diff) + s.slice(0, last - diff + 1);
        return str;

    }
};
