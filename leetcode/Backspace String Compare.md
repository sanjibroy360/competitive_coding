### Backspace String Compare

#### Answer -

```js

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {
    let newS = [];
    let newT = [];
    for(let i = 0; i < s.length ; i++) {
        if(s[i]!= '#') {
            newS.push(s[i]);
        } else {
            newS.pop();
        }
    }
    
    for(let i = 0; i < t.length ; i++) {
        if(t[i]!= '#') {
            newT.push(t[i]);
        } else {
            newT.pop();
        }
    }
    
    return newS.join('') == newT.join('');
};

```