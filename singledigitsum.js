function findSingleDigit(num){
    
    const newnum = num.toString();
    if(newnum.length==1){
        console.log(newnum);
    }
    var sum=0;
    for(let i=0; i<newnum.length; i++){
        sum+= Number(newnum[i]);
    }
    if(sum>9){
        findSingleDigit(sum);
    }else{
    console.log(sum);
    }
}
findSingleDigit(12345);
findSingleDigit(9);