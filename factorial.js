// function factorial(n) {
//     var fact=1;
//     if (n == 0){
//          console.log(`the factorial of ${n} is 1`);
//         }else if(n<0){
//             console.log(`the factorial of ${n} is not possible`);
//         }else{
//             for(let i=1; i<=n; i++){
//                 fact *= i;
//             }
//             console.log(`the factorial of ${n} is ${fact}`);
//         }
          
//     }

let num = 4;
    for(var fact=1; num>1; num--){
        fact = fact*num;
    }
    console.log(fact);


function findFactorial(num){
    if(num==0){
        return 1;
    }
    if(num<=1){
        return 1;
    }
    return num*findFactorial(num-1);
}
console.log(findFactorial(5));



    // factorial(5);
    // factorial(0);
    // factorial(-5);
    // factorial(100);

    

    // function factorial(n) {
    //     if (n == 0) return 1;
    //     return n * factorial(n - 1);
    //     }
        
    //     let num = 5;
    //     console.log("Factorial of " + num + " is " + factorial(num));
        