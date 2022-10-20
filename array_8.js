function Kth_greatest_in_array(arr, k) {

    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  }
  
  console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
  console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))




// const kthSmallest = (arr, low, high, k) {
//     const border = partition(arr, low, high);
//     if(border == k){
//         return arr[k];
//     }else if(border < k) {
//         return kthSmallest(arr, border + 1, high, k);
//     }else if(border > k) {
//         return kthSmallest(arr, low, border - 1, k);
//     }
//     return -1;
// }

// const partition = (array, low, high) => {
// const pivot = array[high];
// let i = low - 1;
// let temp;
// for(let j = low; j< array.length; j++){
//  if(pivot > array[j]){
//     i++;
//     temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//  }
// }
// temp = array[i + 1];
// array[i + 1] = array[high];
// array[high] = temp;
// return i + 1;
// }







// const getKthSmallest = (arr, k) => {
//     arr.sort(arr);
//     return arr[k - 1];
//   }
  
//   const arr = [8,2,3,4,1,7];
//   console.log(getKthSmallest(arr,5)); //will return 7