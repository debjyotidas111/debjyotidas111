function sumOfColumn(matrix){
    var result=[];
    for(let i =0; i<matrix[0].length; i++){
     let sum=0;
     for(let j=0; j<matrix.length; j++){
     sum=sum+matrix[j][i];
     }
    
    } result.push(sum);
      console.log(result);
}
sumOfColumn([
    [1,0,0,11],
	[0,2,44,0],
	[0,55,3,0],
	[22,0,0,4]]);