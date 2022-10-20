// Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level nuless than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level.
// Example:
// Input: A = {1, 2, 3, 4, 5}
// Output: [48]
//  [20, 28]
//  [8, 12, 16]
//  [3, 5, 7, 9]
//  [1, 2, 3, 4, 5] 

function reducedArray(array){
    if(array.length==0){
        return;
    }
    let newarr = [];
    for(let i =0; i<array.length-1; i++){
        newarr[i]= array[i]+array[i+1];
    }
    reducedArray(newarr);
    console.log(array);
}
let array = [1,2,3,4,5];
reducedArray(array);
//[ 48 ]
// [ 20, 28 ]
// [ 8, 12, 16 ]
// [ 3, 5, 7, 9 ]
// [ 1, 2, 3, 4, 5 ]



// function printTriangle(A,  n)
// {
//   // Base case
//   if (n < 1)
//     return;

//   // Creating new array which contains the
//   // Sum of consecutive elements of the prev array
//   // then the new array is passed as a parameter.
//   let temp = new Array(n - 1);
//   for (let i = 0; i < n - 1; i++)
//   {
//     let x = A[i] + A[i + 1];
//     temp[i] = x;
//   }

//   // Make a recursive call and pass
//   // the newly created array
//   printTriangle(temp, n - 1);

//   // Print current array in the end so
//   // that smaller arrays are printed first
//   for (let i = 0; i < n ; i++)
//   {
//     if(i == n - 1)
//       document.write( A[i]  + " ");
//     else
//       document.write( A[i]  + ", ");
//   }

//   document.write("<br>");
// }

// let A = [ 1, 2, 3, 4, 5 ];
// let n = A.length;
// printTriangle(A,n);