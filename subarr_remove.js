// Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is d
// ivisible by p. It is not allowed to remove the whole array.

// Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

// A subarray is defined as a contiguous block of elements in the array.

 

// Example 1:

// Input: nums = [3,1,4,2], p = 6
// Output: 1
// Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
// Example 2:

// Input: nums = [6,3,5,2], p = 9
// Output: 2
// Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
// Example 3:

// Input: nums = [1,2,3], p = 3
// Output: 0
// Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.


const minSubarray = function (nums, p) {

    let n = nums.length;
    let map = new Map([[0, -1]])
    let total = 0, res = n, sum = 0
    for (let i = 0; i < n; i++) {
        total += nums[i]
    }
    total = total % p

    for (let i = 0; i < n; i++) {
        sum = (sum + nums[i]) % p
        map.set(sum, i)
        let prevSum = mod(sum - total, p)
        if (map.has(prevSum)) {
            res = Math.min(res, i - map.get(prevSum))
        }
    }

    return res == nums.length ? -1 : res
};

function mod(a, b) {
    let c = a % b
    return c < 0 ? c + b : c
}

console.log(minSubarray([3, 1, 4, 2], 6));  //1
console.log(minSubarray([6, 3, 5, 2], 9));   //2
console.log(minSubarray([1, 2, 3], 3));   //0