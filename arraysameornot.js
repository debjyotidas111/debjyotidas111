var array1 = [5,2,7,-9,3,8];
var array2 = [8,3,7,5,2,-9];
const isSame = array1.length = array2.length && array1.every((curElement) =>{
    if(array2.indexOf(curElement>-1)){
        return(curElement = array2[array2.indexOf(curElement)]);
    }
  } 
)
console.log(isSame);
