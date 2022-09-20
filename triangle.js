function checkIfTriangle(a,b,c){
    if(a+c<=b || b+c<=a || a+b<=c){
        console.log("It is not a triangle");
    }else{
        console.log("It is a triangle");
    }
}
checkIfTriangle(10,22,55);
checkIfTriangle(0,0,0);
checkIfTriangle(1,1,1);
