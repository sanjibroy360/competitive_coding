// Magic Squares [6 kyu]

// Magic squares are numbers in an n * n grids, where the sum of numbers sides and diagonals all give the same sum.

// Example:
// Below depicts the famous Lo Shu Magic Square. Where the sum of an array rows and columns, as well as diagonals, all sum up to 15.

// var arr = [
//             [8, 1, 6] 
//             [3, 5, 7]
//             [4, 9, 2]
//           ];



function magicSquare(arr) {

    if (!arr.length) {
        return false;
    }

    let len;
    let prevRow = '';
    let row = -1;
    let diagonal1 = 0;
    let diagonal2 = 0;
    let col = 0;

    for (let i = 0; i < arr.length; i++) {
        row = 0;

        if (arr[i]) {

            col += arr[i][i];
            len = arr[i].length;

        } else {
            return false;
        }

        for (let j = 0; j < len; j++) {

            if (!arr[i][j]) {
                continue;
            }
            row += arr[i][j];

            if (i == j) {
                diagonal1 += arr[i][j];
            }

            if (j == len - i - 1) {
                diagonal2 += arr[i][j];
            }
        }
        if (prevRow == '') {
            prevRow = row;

        } else if (prevRow != row) {
            return false;
        }

    }

    if (row == col && row == diagonal1 && row == diagonal2) {
        return true;
    } else {
        return false;
    }

}