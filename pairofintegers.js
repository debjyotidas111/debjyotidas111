function equation(num){
    for (a = 1; a <= num; a++){
        for (b = 1; b <= num; b++){
            if (a * a + b * b == num){
                console.log("number pair is ", a, b);
            }
        }
    }
             if (a * a + b * b !== num){
                console.log("invalid");
             }

}

 equation(50);           

//  function squareSum(num) {
//     var a = 0;
//     while (a * a < num) {
//       var b = 0;
//       while (b * b < num) {
//         if (a * a + b * b == num) {
//           if (a <= b) {
//             console.log(a + "," + b);
//           }
//         }
//         b += 1;
//       }
//       a += 1;
  
//     }
//   }
  
  
  
//   squareSum(50);