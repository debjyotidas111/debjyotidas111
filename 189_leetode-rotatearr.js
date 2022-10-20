
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// var rotate = function(nums, k) {  
//     let result = nums.indexOf(nums[nums.length-k]);
//     let rotated = nums.slice(result);
//     let rotated1 = nums.slice(0, result);
//     return [...rotated,...rotated1];
// };


//time limit exceeded
// var rotate = function(nums, k) {  
//         let i=0;
//         while(i<k){
//             let end = nums.pop();
//             nums.unshift(end);
//             i++
//         }
//         return nums;
//     };


//using o(1) extra space right answer
var rotate = function(nums, k) {  
      const n = nums.length;
      k%= n;

      Reverse(nums, 0 , n-1);
      Reverse(nums, 0 , k-1);
      Reverse(nums, k , n-1);
      return nums;
    };

    function Reverse(arr, start , end){
        while(start<end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

console.log(rotate([1,2,3,4,5,6,7],3));  // [
//     5, 6, 7, 1,
//     2, 3, 4
//   ]

console.log(rotate( [-1,-100,3,99],2)); // [ 3, 99, -1, -100 ]



// var rotate = function(nums, k) {  
//     const numscopy = nums.slice();
//     for(let i=0; i<nums.length; i++){
//         nums[(i+k)% nums.length]= numscopy[i]; 
//     }
//     // for(let num in nums ){
//     //     nums[(num+k)% nums.length]= numscopy[num];    }
//         //return numscopy;
// };

//189_leetode-rotatearr.js