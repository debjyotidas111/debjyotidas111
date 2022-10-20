//Logic fUnction to verify the cells other then diagonal
function checkMatrixDiagonal(A)
    {
    		//Iterate through the 2D Array
        for (let i = 0; i < A.length; i++)
            for (let j = 0; j < A[i].length; j++) //A.length and A[i].length are working same
                if ((i != j) &&  (A[i][j] != 0)) // Check if current cell is not diagonal one and its value is not 0 - if yes return false
                    return false;
   
        return true;
    }
    
//Taking Input
let A=[    
    [1,0,0,0],
	[0,2,0,0],
	[0,0,3,0],
	[0,0,0,4] ]


//Execute the logic
console.log(checkMatrixDiagonal(A));