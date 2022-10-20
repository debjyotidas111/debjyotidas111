// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.




var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};


// var removeDuplicates = function(nums) {
//     var newSet = [...new Set(nums)]
//     //return newSet.length;
//     return newSet;
// };

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));  //5
console.log(removeDuplicates([1,1,2]));   //2