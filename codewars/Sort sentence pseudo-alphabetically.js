//Sort sentence pseudo-alphabetically [6 kyu]

// Question -

/*
Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

1. All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.

2. All words that begin with an upper case letter should come after that, and should be sorted in descending order.

If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.
*/

// Answer -

function sort(str) {
  var filteredStr = "";
  for (let i = 0; i < str.length; i++) {
    var alphaAscii = str.charCodeAt(i);

    if ((alphaAscii >= 97 && alphaAscii <= 122) || alphaAscii == 32) {
      filteredStr += str[i];
    } else if ((alphaAscii >= 65 && alphaAscii <= 90) || alphaAscii == 32) {
      filteredStr += str[i];
    }
  }
  filteredStr = filteredStr.split(" ");

  var small = filteredStr
    .filter((x, i) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
    .sort()
    .join(" ");
  var caps = filteredStr
    .filter((x) => !small.includes(x))
    .sort()
    .reverse()
    .join(" ");
  var ans = small + " " + caps;

  return ans.trim();
}
