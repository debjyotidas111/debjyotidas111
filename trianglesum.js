function triangleSum(matrix){
    

      let lowerTriangleSum=0;
      let upperTriangleSum=0;
      for(let i=0; i<matrix.length; i++){
        for(let j=0; j<=i; j++){
            lowerTriangleSum+=matrix[i][j];
        }
        for(let j=i; j<matrix[i].length; j++){
            upperTriangleSum+=matrix[i][j];
        }
    }
      
      console.log(lowerTriangleSum);

      //let upperTriangleSum=0;
    // for(let i=0; i<matrix.length;i++){
    //     for(let j=i; j<matrix[i].length; j++){
    //         upperTriangleSum+=matrix[i][j];
    //     }
    // }
    console.log(upperTriangleSum);

}
var gg = [
    [2,15,4],
    [1,2,15],
    [2,10,7]

]

triangleSum(gg);
