function orderCheck(a,b,c){
    if (a>b && b>c){
        console.log("Decreasing order");
    }else if (a<b && b<c){
        console.log("Increasing order");
    }else {
        console.log("Neither Increasing nor Dcreasing");
    }
}
orderCheck(5,10,15);
orderCheck(80,50,20);
orderCheck(80,100,20);
orderCheck(80,20,100);