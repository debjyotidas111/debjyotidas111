function fib(num){
    var a = 0;
    var b = 1;
    var c;
    console.log(a);
    console.log(b);
    for(let i=2; i<=num; i++){
        c = a+b;
        if(c<num){
            console.log(c);
            a=b;
            b=c;
        }
    }
}
// 0 1 1 2 3 5 8
fib(10);