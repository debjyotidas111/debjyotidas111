var array = [1,2,3,4,5];
function reverse(array){
    var newarr = [];
    var j=0;
     for(let i=array.length-1; i>=0; i--){
          newarr[j] = array[i];
         j++;
     }
     return newarr;
 }

console.log(reverse(array));