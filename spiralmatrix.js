
function spiralMatrix(matrix){
    let startRow = 0;
    let startcol=0;
    let endRow=matrix.length-1;
    let endcol=matrix[0].length-1;
    let count =1;

    while(startRow<endRow && startcol<endcol){
        // 1st loop from 1st row 1st column to 1st row last column.
        for(let i=startcol; i<=endcol; i++){
            console.log(matrix[startRow][i]);
        }
        // 2nd loop from 2nd row last column to last row last column
        startRow=startRow+1;
        for(let i=startRow; i<=endRow; i++){
            console.log(matrix[i][endcol]);
        }
        endcol = endcol-1;
        for(let i=endcol; i>=startcol; i--){
                 console.log(matrix[endRow][i]);
        }
        endRow = endRow-1;
        for(let i=endRow; i>=startRow; i--){
            console.log(matrix[i][startcol]);
        }
        startcol=startcol+1;
        count++;
    }
}

spiralMatrix([
    [ 1 ,2, 3, 4],
    [ 5, 6, 7, 8],
    [9, 10 ,11, 12] ,
    [13 ,14 ,15, 16]]);



// function spiralMatrix(array){

//     for(let j= array[0][0]; j<=array[0][3]; j++){
//         console.log(array[j]);
//     }
//     for(let x= array[0][3]; x<=array.length; x++){
//         if( x == array[0][3]  && x == array[1][3] && x == array[2][3] && x == array[3][3] ){
//             console.log(x);
//         }}
//         for(let z =array[3][3];  z<=array.length; z++){
//             if(z == array[3][3] && z == array[3][2] && z == array[3][1] && z == array[3][0] ){
//                 console.log(z);
//         }}
//         for(let y =array[3][0];  y<=array.length; y++){
//             if(y == array[3][0] && y == array[2][0] && y == array[1][0] && y == array[3][0] && y == array[1][1] && y == array[1][1] &&  y == array[1][2] ){
//                 console.log(z);
//     }}
//     for(let o =array[3][0];  o<=array.length; o++){
//         if(o == array[2][2] && o== array[2][1]   ){
//             console.log(o);
//     }}
// }




// spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);


    //  1 2 3 4
    //  5 6 7 8
    //  9 10 11 12 
    //  13 14 15 16