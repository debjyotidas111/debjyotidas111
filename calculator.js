function addition(x, y){
    var z= (x+y);
    console.log("the result is "+z);
}
function subtraction(x, y){
    var a= (x-y);
    console.log("the result is "+a);
}
function multiplication(x, y){
    var b= (x*y);
    console.log("the result is "+b);
}
function division(x, y){
    var c= (x/y);
    console.log("the result is "+c);
}
function remainder(x, y){
    var m= (x%y);
    console.log("the result is "+m);
}
function percentage(x, y){
    var t= (x*y/100);
    console.log("the result is "+t);
}
// function Sqrt(num){
// let sqrt1 = num/2;
// let temp =0;

// while(sqrt1!=temp){
//     temp = sqrt1;
//     sqrt1=(num/ temp + temp)/2;
// }
// return sqrt1;
// }
function Sqrt(num, precision = 0){
    if (num <= 0) {
        return 0;
     };
     let res = 1;
     const deviation = 1 / (10 ** precision);
     while (Math.abs(num - (res ** 2)) > deviation) {
        res -= ((res ** 2) - num) / (2 * res);
     };
     console.log("the result is "+ Math.round(res * (10 ** precision)) / (10 ** precision)); 
 }
function power(x,y){
    console.log("the result is "+ x**y);
}

Sqrt(25);
power(5,2);
addition(10,6);
subtraction(10,6);
multiplication(10,6);
division(10,6);
remainder(10,6);
percentage(10,6);

