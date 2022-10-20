// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.


// 2 pointers
var maxArea = function(height) {
    // Max amountof water
    let max = 0
    // Pointer to move possible heights
    let left = 0
    let right = height.length-1
    // Use 2 pointers to find the max area
    while(left < right) {
        // Current area
        const area = Math.min(height[left], height[right]) * (right - left)
        // Check if current area is greater than previous max
        max = Math.max(max, area)
        // Move the pointer that has the lowest height
        if(height[left]>height[right]) {
            right--
        } else {
            left++
        }
    }
    return max
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  //49