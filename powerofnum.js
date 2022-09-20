function powerOfNum(a, b){
let i=1;
let result = 1;
while(i<=b){
    result=result*a;
    i++;
}
console.log(result);
}
powerOfNum(2, 5);
powerOfNum(10, 2);