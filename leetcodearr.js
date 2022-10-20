// function solveconfiguration(arr, i ,u){
//     if(arr[i] == 'L' && arr[u]== 'L'){
//         //make all dots as L
//         for(let p= i+1; p<u; p++){
//             arr[p]='L';
//         }
//     }else if(arr[i] == 'R' && arr[u]== 'R'){
//         //male all dots R
//         for(let p= i+1; p<u; p++){
//             arr[p]='R';
//     }
// }else if(arr[i] == 'R' && arr[u]== 'L'){
//      // solve according to odd count and even count of dots
//      var diff = u-i;
//      var mid =Math.trunc(i+u)/2;
//      if(diff %2=== 0){
//          //odd dots
//         for(let y=i+1; y<mid; y++){
//          arr[y] = 'R';
//  }
//         for(let y=mid+1; y<u; y++){
//          arr[y]= 'L';
//  }
//      }else{
//          //even dots
//          for(let y=i; y<=mid; y++){
//              arr[y] = 'R';
//          }
//          for(let y=mid+1; y<u; y++){
//              arr[y]= 'L';
//          }
//      }  
// }else{
//     // nothing to do
// }
// }

// function pushDominoes(str){
//     var n = str.length;
//     var arr = new Array(n+2);
//     arr[0] = 'L';
//     arr[n+1] = 'R';

//     for(let i=1; i<arr.length-1; i++){
//         arr[i] = str.charAt(i-1);
//     }
//     var j=0;
//     var k=1;

//     while(k< arr.length){
//         while(arr[k] == '.')
//         k++;

//     if(k-j >1)
//         solveconfiguration(arr, j, k);
//         j=k;
//         k++;
//     }
//     var res ="";
//     for(let m=1; m<arr.length-1; m++){
//         res += arr[m];
//     }
//     return res;
// }

// console.log(pushDominoes(".L.R...LR..L.."));  //LL.RR.LLRR.L..  "LL.RR.LLRRLL.."
// console.log(pushDominoes("R..L"));



// var l3 =[];
// var l4= [];
// var l7 =[];
// function reverseSum(l1,l2){
//     for(let i=l1.length-1; i>=0; i--){
//         l3.push(l1[i]);
//     }
//     for(let i=l2.length-1; i>=0; i--){
//         l4.push(l2[i]);
//     }
//     var l5 = l3.join('');
//     var l6 = l4.join('');
//     var l8 = Number(l5) + Number(l6);
//     var l9=l8.toString();
//     for(let i=l9.length-1; i>=0; i--){
//        l7.push(l9[i]);
//     }
//    return l7.join('');
// }
// var l1 = [2,4,3]; 
// var l2 = [5,6,4];
// console.log(reverseSum(l1,l2));  //708
//console.log(reverseSum([9,9,9,9,9,9,9],[9,9,9,9]));  // 89990001


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// var twoSum = function(nums, target) {
//     for(let i =0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target) return [i,j];
//         }
//     }
// };
// //var nums = [2,7,11,15];
// var nums =  [3,2,4]
// var target = 6;
//console.log(twoSum(nums, target));



// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).


// var findMedianSortedArrays = function(nums1, nums2) {
//     var joinedItem = [...nums1,...nums2]
//     var mergedone = joinedItem.sort((a,b)=>a-b);
//     if(mergedone.length == 1) return mergedone + [];
//     if(mergedone.length%2 ==0){
//        const half = Math.floor(mergedone.length / 2);
//        //return half;
//        //let stringg = mergedone + [];
//       // return stringg.length;
//        //return stringg;
//       // let result_= stringg.charAt(half);
//       //return mergedone;
//       return mergedone.slice(half-1, 4);
//        //return result_;
//        let result12 = stringg.charAt(half+2);
//       // return result12;
//        return (Number(result12) + Number(result_))/2; 
//     }else{
//         const half1 = Math.ceil(mergedone.length / 2);
//         return half1;
//     }
// };

console.log(findMedianSortedArrays([4,5], [7,6]));
console.log(findMedianSortedArrays([1,2], [3,4,5]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([1,3,1], [2,5,6]));
console.log(findMedianSortedArrays([0,0], [0,0]));
console.log(findMedianSortedArrays([], [2]));
console.log(findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1]));    
//console.log(Math.floor(10/2));
//node leetcodearr.js



// Javascript code for median with
// case of returning double
// value when even number of
// elements are present in
// both array combinely
	
	var a=[900];
	var b=[10, 13, 14];
	
	// Function to find max
	function maximum(a,b)
	{
		return a > b ? a : b;
	}
	
	// Function to find minimum
	function minimum(a,b)
	{
		return a < b ? a : b;
	}
	
	// Function to find median
	// of two sorted arrays
	function findMedianSortedArrays(n,m)
	{
		let min_index = 0,
			max_index = n, i = 0,
			j = 0, median = 0;
		
		while (min_index <= max_index)
		{
			i = Math.floor((min_index + max_index) / 2);
			j = Math.floor((n + m + 1) / 2) - i;
		
			// if i = n, it means that Elements
			// from a[] in the second half is an
			// empty set. and if j = 0, it means
			// that Elements from b[] in the first
			// half is an empty set. so it is
			// necessary to check that, because we
			// compare elements from these two
			// groups. Searching on right
			if (i < n && j > 0 && b[j - 1] > a[i])
				min_index = i + 1;
					
			// if i = 0, it means that Elements
			// from a[] in the first half is an
			// empty set and if j = m, it means
			// that Elements from b[] in the second
			// half is an empty set. so it is
			// necessary to check that, because
			// we compare elements from these two
			// groups. searching on left
			else if (i > 0 && j < m && b[j] < a[i - 1])
				max_index = i - 1;
	
			// we have found the desired halves.
			else
			{
				// this condition happens when we
				// don't have any elements in the
				// first half from a[] so we
				// returning the last element in
				// b[] from the first half.
				if (i == 0)	
					median = b[j - 1];	
				
				// and this condition happens when
				// we don't have any elements in the
				// first half from b[] so we
				// returning the last element in
				// a[] from the first half.
				else if (j == 0)	
					median = a[i - 1];	
				else
					median = maximum(a[i - 1],
									b[j - 1]);	
				break;
			}
		}
		
		// calculating the median.
		// If number of elements is odd
		// there is one middle element.
		if ((n + m) % 2 == 1)
			return median;
			
		// Elements from a[] in the
		// second half is an empty set.
		if (i == n)
			return (median + b[j]) / 2.0;
			
		// Elements from b[] in the
		// second half is an empty set.
		if (j == m)
			return (median + a[i]) / 2.0;
		
		return (median + minimum(a[i],
								b[j])) / 2.0;
	}
	
	// Driver code
	let n = a.length;
	let m = b.length;
	
	// we need to define the
	// smaller array as the
	// first parameter to
	// make sure that the
	// time complexity will
	// be O(log(min(n,m)))
	if (n < m)
		return("The median is : " +
				findMedianSortedArrays(n, m));
	else
		return("The median is : " +
				findMedianSortedArrays(m, n));
	
	
	
	
	// This code is contributed by unknown2108

