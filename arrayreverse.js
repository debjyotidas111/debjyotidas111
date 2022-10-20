
function reverse(array){
    var newarr = [];
    var j=0;
     for(let i=array.length-1; i>=0; i--){
          newarr[j] = array[i];
         j++;
     }
     console.log(newarr);
 }
 
 reverse([1,2,3,4,5]);
 

 
 


// 1,2,3,4,5,8,7,6


// function reverseArray (arr) {
//     var numArr = arr.length;    
//     var newArr = [];    
//     for (i = 0; i < numArr; i++) {      
//         let inArr = arr;
//         newArr[i] = inArr.pop(i);       
//     }
//     console.log(newArr);
// }

// reverseArray([1,2,3,4,5,6,7]);




// function reverseArray (arr) {
//     var numArr = arr.length;    
//     var newArr = [];    
//     for (i = 0; i < numArr; i++) {      
//         let inArr = arr;
//         newArr[i] = inArr.pop(i);       
//     }
//     console.log(newArr);
// }

// reverseArray(["A", "B", "C", "D", "E", "F"]);