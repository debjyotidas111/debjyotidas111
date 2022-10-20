function waveMatrix(array){
    
     const collength = array[0].length;
    for (let col=0; col<collength; col++){
        if(col%2==0){
            for(let row=0; row<array.length; row++){
                console.log(array[row][col]);
            }
        }else{
            for(let row=array.length-1; row>=0; row--){
                console.log(array[row][col]);
            }
        }
    }
}
 
waveMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);