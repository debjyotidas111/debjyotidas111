//this is giving us duplicate values that's why second method is down below
// function threeSum(array,sum){
//     var arr = [];
//    for(let i=0; i<array.length-2; i++){
//      for(let j=i+1; j<array.length-1; j++){
//         for( let k=j+1; k<array.length; k++){
//             if(array[i]+array[j]+array[k]==sum){
//                 arr.push([array[i],array[j],array[k]]);
//              // console.log([array[i],array[j],array[k]]);
//             }
//          }
//       }
//    }
//    console.log(arr);
//    //return [...new Set(arr)];   
// }
// //console.log(threeSum([1,-1,2,0,3,1,-2], 0));
// //threeSum([1,-1,2,0,3,1,-2], 0);
// //[ 1, -1, 0 ]
// // [ 1, 1, -2 ]
// // [ -1, 0, 1 ]
// // [ -1, 3, -2 ]
// // [ 2, 0, -2 ]
// threeSum([5,3,2,6,9,1,4,0], 10);
// [ 5, 3, 2 ]
// [ 5, 1, 4 ]
// [ 3, 6, 1 ]
// [ 6, 4, 0 ]
// [ 9, 1, 0 ]
// node threesumprob.js


// function find3NUmberSum(array, sum){

//     let matrix=[];
//     // brute force technique.
//     for(let i=0; i<array.length-2; i++){
//         for(let j=i+1;j<array.length-1; j++){
//             for(let k=j+1; k<array.length; k++){
//                 if(array[i]+array[j]+array[k]==sum){
//                     matrix.push([array[i], array[j], array[k]])
//                     // console.log([array[i], array[j], array[k]]);
//                 }
//             }
//         }
//     }
//     // console.log(matrix);

//     for(let i=0; i<matrix.length; i++){
//         const array = matrix[i]; // [5, 3, 2]
//         for(let j=0; j<matrix.length; j++){
//             if(i==j) continue;
//             let target = [...matrix[j]]; // [3, 5, 2]
//             let counter = 0;
//             for(let k=0; k<array.length; k++){
//                 if(target.includes(array[k])){
//                     target.splice(target.indexOf(array[k]), 1);
//                     counter++;
//                 }
//             }
//             if(counter==3){
//                 matrix.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     console.log(matrix);
// }

// const array = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
// find3NUmberSum(array, 0);
// [
//     [ -4, 1, 3 ],
//     [ -4, 4, 0 ],
//     [ -2, 1, 1 ],
//     [ -2, 4, -2 ],
//     [ 1, -5, 4 ],
//     [ 0, 0, 0 ]
//   ]


var g =['x','f',"z",'t'];
var g1 =[20,74,-5,10,0,7];
g.sort();
g1.sort();
console.log(g);
console.log(g1);
// [ 'f', 't', 'x', 'z' ]
//[ -5, 0, 10, 20, 7, 74 ]


function find3NUmberSum(array, sum){
    // [5,3,2,6]
    // 2, 1, -4, 6
    // 2, 3, 5, 6
    array.sort((a, b)=> a-b);
    array = [...new Set(array)];  // another way to check for duplicates   if(array[i] != array[i-1])
    console.log(array);

    for(let i=0; i<array.length-2; i++){
        let left = i+1;
        let right=array.length-1;

        while(left<right){
            if(array[i]+array[left]+array[right]==sum){
                console.log([array[i], array[left], array[right]]);
                left++;
            }
            else if(array[i]+array[left]+array[right]>sum){
                right--;
            }else{
                left++;
            }
        }
    }
}


// const array = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
const array1=[5,3,2,6,9,1,4,0, 2, 6, 9];
find3NUmberSum(array1, 10);