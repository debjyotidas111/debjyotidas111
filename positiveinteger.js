
// Given a positive integer A, find a pair of integer a, b such that
// a and b are positive
// A <= B
// a^2 + b^2 = A
// 0<=A<=100000




function squareSum(A){
    let a=0;
    while(a*a < A){
    let b = 0;
    while(b*b <A){
    if(a*a+b*b == A){
    if(a<=b){
    console.log(a,b);
    }
    }
    b+=1;
    }
    a+=1;
    }
    }
    squareSum(50);