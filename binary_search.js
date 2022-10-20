var start = 0;
    var end = size-1;
    var mid = start+(end-start)/2;//(start+end)/2;
    var size = 5;

function binarySeach(arr, size, key){
    
    while(start<=end){
        if(arr[mid] == key)
        return mid;

        //choose another part
        if(key> arr[mid]){
            start = mid +1;
        }
        else{
            end = mid-1;
        }
      return  mid =  start+(end-start)/2; //(start+end)/2;
    }

    return -1;
}
var arr = [2,4,5,7,8];
//var arr1 = [2,4,5,7,8,90];

//var size1 = arr1.length;
//console.log(binarySeach(arr1, size1, 90));
console.log(binarySeach(arr, size, 7));
//console.log(binarySeach(arr, 6, 10));
//console.log(binarySeach(arr, 6, 5));

