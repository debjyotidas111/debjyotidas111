function findPosition(n){
    
    if(n<1) return -1;
    if(n==1) return 0;
    if(n==2) return 1;
    
    let i=2;
    let series = [0,1];
    while(i<=n-1){
        let newNum = series[i-1] + series[i-2];
        series.push(newNum);
        i++;
    }
    console.log(series[i-1]);
}
findPosition(5);
findPosition(10);
findPosition(24);
