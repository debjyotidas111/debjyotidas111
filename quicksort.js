// function quickSort(array, low, high){
    
//     let start = low;
//     let end = high;
//     // base condition
//     if(start>=end){
//         return;
//     }

//     let mid = Math.floor((start+end)/2);
//     const pivot = array[mid];

//     while(start<end){
//         while(array[start]<pivot){
//             start++;
//         }
//         while(array[end]>pivot){
//             end--;
//         }
//         if(start<=end){
//             swap(array, start, end);
//             start++;
//             end--;
//         }
//     }

//     // left array
//     quickSort(array, low, end);
//     // right array
//     quickSort(array, start, high);
// }

// function swap(array, start, end){
//     let temp = array[start];
//     array[start]=array[end];
//     array[end]=temp;
// }



// const array = [22, 43, 12, 8, 90, 32, 67, 21];
// quickSort(array, 0, array.length-1);
// console.log(array); //     [8, 12, 21, 22,
                     //    32, 43, 67, 90]
   

 function quickSort1(array1){
    if(array1.length ===1){
        return array1;
    }
    const pivot = array1[array1.length-1];
     const leftarr = [];
     const rightarr = [];
     for(let i=0; i< array1.length-1; i++){
        if(array1[i]<pivot){
            leftarr.push(array1[i]);
        }else{
            rightarr.push(array1[i]);
        }
     } 
     if(leftarr.length >0 && rightarr.length > 0){
        return [...quickSort1(leftarr),pivot, ...quickSort1(rightarr)];
     }else if(leftarr.length >0){
        return [...quickSort1(leftarr),pivot];
     }else{
        return [pivot,...quickSort1(rightarr)];
     }
}                    
  
const array1 = [22, 43, 12, 8, 90, 32, 67, 21];
console.log(quickSort1(array1));