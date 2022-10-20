function starLoop(n){
    for(let i =1; i<=n; i++){
        for(let j=1; j<=n-i; j++){
            console.log(" ");
        }for(x=1; x<=2*n-1; x++){
            console.log("*");
        }
        /n
        //console.log(/n);/n
    }
}
starLoop(5);