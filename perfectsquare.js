function isPerfectSquare(n){
    var x=Math.floor(Math.sqrt(n));
    if(x*x==n){
    return true;
    }
    else{
    return false;
    }
    }
    console.log(isPerfectSquare(101));
    console.log(isPerfectSquare(100));