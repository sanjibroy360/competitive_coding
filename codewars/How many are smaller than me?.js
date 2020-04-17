// How many are smaller than me? [7 kyu]


/*

function smaller(arr)

that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]

*/

// Answer:-


function smaller(arr) {
    let ans = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count = 0;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }

        }
        ans.push(count);
    }
    return ans;
}