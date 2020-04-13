// My Aunt Sally[6 kyu]

// My aunt Sally is a peculiar woman.She only likes things that have a double letter in them.She dislikes walking but loves running.She also doesn’t like driving but strangely has a passion for steering.

//     Remember, aunt Sally only likes activites that contain adjacent double letter in them(not single or tripple, or more).

// She would like "skiing"

// but she would not like "skiiiing"

// Your task is to return a string of activities, if there are more than one seperate them by a space.

// skiing running

// If there are no activites that aunt Sally likes return an empty string.




function myAuntSally(str) {
    str = str.split(" ");
    let ans = '';
    let flag = false;

    let prev = '';
    let word = '';


    for (let i = 0; i < str.length; i++) {
        word = str[i];
        for (let j = 2; j < word.length; j++) {
            let ascii = word.toUpperCase().charCodeAt(j - 1);
            let prev = '';
            let prev2 = '';
            let next = '';
            if (ascii >= 65 && ascii <= 90) {
                prev = word[j - 1];
                prev2 = word[j - 2];
                next = word[j + 1];
            } else {
                break;
            }

            if (word[j] == prev && word[j] !== prev2 && word[j] !== next && prev) {
                flag = true;
                ans += ' ' + word;
            }
        }
    }
    if (flag) {
        return ans.trim();
    } else {
        return '';
    }

}