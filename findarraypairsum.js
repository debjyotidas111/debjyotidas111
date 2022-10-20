// function findPairForSum(array, num){
    
//     for (let i=0; i<array.length; i++){
//         let firstNum = array[i];
//         let secondNum = num - firstNum;
//         for (let j=0; j<array.length; j++){
//             if (i!=j && array[j]==secondNum){
//                 console.log([firstNum, secondNum]);
//                 return;
//             }           
//         }
//     }
//     console.log("pair not found");
//     return;
//     }
    
//     findPairForSum([60,20,30,50,40,0], 60 );


function findPairSum(array, num){
   var obj = {};

   for(let i=0; i<array.length; i++){
    let firstNum = array[i];
    let secondNum = num - firstNum;
    if(!obj[firstNum.toString()]){
        obj[firstNum.toString()]=i.toString();
    }
    if(!obj[secondNum.toString()] && obj[secondNum.toString()]!=i.toString()){
        console.log([firstNum, secondNum]);
        //return;   // if we return here only first possible combination will be printed
    }
   }
   return;    // if we return here all the possible combinations will be printed
}
findPairSum([20,30,50,60,0], 50);
























//     function findPairForSum1(array, num){
    
//     for (let i=0; i<array.length; i++){
//         var obj = {};
//           if( array[i].toString!=obj){
//             obj.i=1;
//           }
          
//           let firstNum = obj[i];
//         let secondNum = num - firstNum;
        
//         console.log([firstNum, secondNum]);
//         return;
//     }
//     return;
// }

// findPairForSum1([20,30,50,0], 50 );