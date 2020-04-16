// Arrays Similar [6 kyu]


/*
Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false  */


// Answer -

function arraysSimilar(arr1, arr2) {
    
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    
    if (arr1.length > arr2.length) {
        return arr1.every((el, index) => el === arr2[index]);
    } else {
        return arr2.every((el, index) => el === arr1[index]);
    }

}