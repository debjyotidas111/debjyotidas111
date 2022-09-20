function largestNumber(a,b,c){
    if (a>b && a>c){
        console.log(a+ " is the largest number");
    }else if (b>a && b>c){
        console.log(b+ " is the largest number");
    }else {
        console.log(c+ " is the largest number");
    }
}
largestNumber(50, 20, 10);
largestNumber(20, 50, 10);
largestNumber(10, 20, 50);