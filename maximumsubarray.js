function subarray(nums){
    var solution= [0];

    for(let i=1; i<nums.length; i++){
        nums[i]= Math.max(nums[i], nums[i]+ nums[i-1]);
        solution = Math.max(solution, nums[i]);
    }
    return solution;
}

console.log(subarray([10,-2,1,-2,4,6,-3,9]))