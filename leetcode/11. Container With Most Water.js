// 11. Container With Most Water

/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/

// Answer -

var maxArea = function (height) {

    let maxArea = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        let minHeight = 0;

        if (height[r] > height[l]) {

            minHeight = height[l];
            l++;

        } else {

            minHeight = height[r];
            r--;

        }

        let area = val * (r - l + 1);
        maxArea = maxArea < area ? area : maxArea;
    }
    return maxArea;
};
