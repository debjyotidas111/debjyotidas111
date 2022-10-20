// function bubbleSort(arr){
//     let n =arr.length;
//     let newarr =[];
//     for(let i=0; i<n; i++){
//       var isSwapped1 = false;
//         for(let j=0; j<n-i-1; j++){
//            if(arr[j]>arr[j+1]){
//             var temp_ = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp_;
//             newarr.push(temp_);
//           //  (arr[j] = arr[j+1]);          
//           //  var gg= arr[j];
//           //  newarr.push(gg);
//            isSwapped1 = true;
//            }//  }else{
//           //   newarr.push(arr[j]);
//           //  }          
//         }
//         if(isSwapped1) return;
//     }
//     return newarr; 
// }
// let arr = [7,4,8,4,5,1];
// console.log(bubbleSort(arr));

// find 3rd largest element in an array
function bubblesort1(arr1, k){
    for(let i=0; i<k; i++){
        var isSwapped = false;
        // last i elements are already sorted
        for(let j=0; j<arr1.length-i-1; j++){
            //check if the current element is greater than the next element
            if(arr1[j] > arr1[j+1]){
                //if the condition is true then swap both of them
                var temp3 = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp3;
                isSwapped=true; 
            }
        }
        if(!isSwapped) break;
    }
    return arr1;
}
var k=3;
var arr1 = [7,2,8,4,5,1];  // [ 1, 2, 4, 5, 7, 8 ]
arr1 =  bubblesort1(arr1,k);
console.log(arr1); 
//[5,4,3,2,1,6,2];
// bubblesort1(arr1, k);
// console.log(bubblesort1(arr1, 6));
// console.log(bubblesort1(arr1.length-3));  //4

function bubbleSort2(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
      var isSwapped2 = false;
  
      for (var j = 0; j < inputArray.length - 1 - i; j++) {
        if (inputArray[j].localeCompare(inputArray[j + 1]) != -1){
          var temp2 = inputArray[j];
          inputArray[j] = inputArray[j + 1];
          inputArray[j + 1] = temp2;
          isSwapped2 = true;
        }
      }
      if (!isSwapped2) break;
    }
    return inputArray;
  }
  
  var arr2 = ["India", "Australia", "China", "Brazil"];
  
  console.log(bubbleSort2(arr2)); // [ 'Australia', 'Brazil', 'China', 'India' ]

  function selectSort(arr3){
    var k1 = arr3.length;
    for(let i=0; i<k1-1; i++){
       var min_index = i;
        
        for(let j=i+1; j<k1; j++){
           
            if(arr3[j] < min_index){
                
                arr3[min_index] = arr3[j];               
            }
        }
        if(min_index!=i){
          var temp00 = arr3[min_index]
          arr3[min_index ] = arr3[i];
          arr3[i] = temp00;
          }     
    }
    return arr3;
  }
    var arr3 = [5,4,3,2,1,6,2];
    console.log(selectSort(arr3));


    function selectSort1(arr4){
    for (var i = 0; i < arr4.length-1; i++) {
              let minindex = i;
      for (var j = i+1; j < arr4.length; j++) {
        if (arr4[j].localeCompare(arr4[minindex]) == -1) {
         minindex = j;
         
        }
      } 
      if(minindex!=i){
      var temp22 = arr4[minindex];
      arr4[minindex] = arr4[i];
        arr4[i] = temp22;
      }
    }
    return arr4;
  }
      var arr4 = ["India", "Australia", "China", "Brazil"];
      console.log( selectSort1(arr4));  //  [ 'Australia', 'Brazil', 'China', 'India' ]

      function bubbleSort3(arr5, k_){
       
       for(let i=0; i<k_; i++){
        var isSwapped10 = false;
        // last i elements are already sorted
        for(let j=0; j<arr5.length-1-i; j++){
            //check if the current element is greater than the next element
            if(arr5[j]['salary']> arr5[j+1]['salary']){
                //if the condition is true then swap both of them
                var temp10 = arr5[j];
                arr5[j] = arr5[j+1];
                arr5[j+1] = temp10;
                isSwapped10=true; 
            }
        }
        if(!isSwapped10) break;
    }
    return arr5;
}
  var k_ =2;
   var arr5 = [{name:"deb", salary:100000}, {name:"alex", salary:500000},{name:"biraj", salary:20000}, {name:"xxx", salary:300000}]
   //bubbleSort3(arr5, k_);
   arr5 =  bubbleSort3(arr5,k_);
   console.log(arr5);  // [
  //   { name: 'biraj', salary: 20000 },
  //   { name: 'deb', salary: 100000 },
  //   { name: 'xxx', salary: 300000 },
  //   { name: 'alex', salary: 500000 }
  // ]
   console.log(arr5[arr5.length-k_]['name']); // xxx



   function mergedSort(array_){

    for(let i =0; i<array_.length; i++){
      for(let j=0; j<array_1.length; j++){
        var res = array_[i] + array_ [j];
      }
    }
    return res;
   }
 var array_ = [1,2,3,4];
 var array_1 =[5,6,7,8,9]
console.log(mergedSort(array_, array_1));



   //WE have two parts in merge sort
//a recursive part that splits up the elements into single units
//iterative path that merges the single units into a sorted or right order

const arr$ = [24, 5, 68, 30, 1, 7, 58, 5, 90];

// function mergeSort(arr) {
//   if (arr$.length < 2) {
//     return arr$;
//   }

//   const middle = Math.ceil(arr$.length / 2);
//   const left = arr$.slice(0, middle),
//     right = arr$.slice(middle, arr$.length);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];

//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   while (left.length) {
//     result.push(left.shift());
//   }
//   while (right.length) {
//     result.push(right.shift());
//   }
//   return result;
// }

//console.log(mergeSort(arr$));


let arr = [7,4,8,4,5,1];
var isSwapped1;
function bubbleSort(arr){
  isSwapped1 = false;
  let n =arr.length-1;
  for(let i=0, j=1; i<n; i++, j++){    
         if(arr[i]>arr[j]){
         isSwapped1 = true;
         [arr[i], arr[j]] = [arr[j], arr[i]];              
      }
  }
 n--;
}
do{
  bubbleSort(arr);
} while(isSwapped1);

console.log(arr);