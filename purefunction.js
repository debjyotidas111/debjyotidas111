// this is a pure function
// It doees not depend on external data
// It only depends on arguments passed.
// It does not have any side effects.
 function pureAddFunction(a,b){
    return a+b;
 }

 console.log(pureAddFunction(10,4));

 //this is impure function
 // It depends on external data
 // Its behaviour might be changes as side effect
 const num =5;
 function impureAddFunction(c,d){
    return c+d+num;
 }
 console.log(impureAddFunction(10,4));