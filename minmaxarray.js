array = [2,3,15,6]
function findMinMax(array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i=0; i<array.length; i++){
        // for updating min value
        if(array[i]<min){
            min = array[i];
        }
        // for updating max value
        if(array[i]>max){
            max = array[i];
        }
    }
     console.log("Min "+ min);
     console.log("max "+ max);
}
findMinMax(array);
findMinMax([55,78,25,01]);
findMinMax([-22,-44,0,55]);