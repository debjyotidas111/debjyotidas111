//Given an array having 0,1,2 We need to write a function that sorts the array in ascending order
//without using inbuilt sort function


var input = [1, 1, 1, 2, 0, 0, 0];
var size = input.length;
// function to sort an array containing 0,1,2 and return the sorted array 
function sortZeroOneTwo(input, size) {
  let start = 0;
  let mid = 0;
  let end = size - 1;
  let swap = 0; //variable for swapping 
  while (mid <= end) {
    if (input[mid] == 0) {
      swap = input[start];
      input[start] = input[mid];
      input[mid] = swap;
      mid++;
      start++;
    } else if (input[mid] == 1) {
      mid++;
    } else {
      swap = input[end];
      input[end] = input[mid];
      input[mid] = swap;
      end--;
    }
  }
  return input;
}

var output = sortZeroOneTwo(input, size);
console.log(output);
