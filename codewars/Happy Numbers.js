// Happy Numbers[6 kyu]


// A happy number is defined as an integer in which the following sequence ends with the number 1.

// Start with the number itself.
// Calculate the sum of the square of each individual digit.
// If the sum is equal to 1, then the number is happy.If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.
// For example, the number 7 is a "happy" number:

// 72 = 49 -- > 42 + 92 = 97 -- > 92 + 72 = 130 -- > 12 + 32 + 02 = 10 -- > 12 + 02 = 1


// Your task is to write a program which will print a list of all happy numbers between 1 and x(both inclusive), where:




function check(x) {
    let num = x;
    let sum = x;
    let arr = [];
    while (sum >= 1) {
        
        arr.push(sum);
        num = sum;
        sum = 0;

        if (!arr.length) {
            arr.push(sum);
        }

        while (num !== 0) {
            let a = Math.floor(num % 10);
            sum += a ** 2;
            num = Math.floor(num / 10);
        }
        if (sum == 1) {
            return true;
        }
        if (arr.includes(sum)) {
            break;
        } else {
            arr.push(sum);
        }
    }
    return false;
}

function happyNumbers(x) {
    let ans = [];
    for (let i = 1; i <= x; i++) {
        if (check(i)) {
            ans.push(i);
        }
    }
    return ans;
}