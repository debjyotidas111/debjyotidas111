function checkArmstrongnum(number){
    var temp = number;
    var noOfDigits = number.toString().length;
    var sum = 0;
    while(temp>0){
        var digit = temp%10;
        sum+= digit**noOfDigits;
        temp = parseInt(temp/10);
    }
    if(sum==number){
        console.log(number," is an armstrong number");
    }else{
        console.log(number," is not an armstrong number");
    }
}
checkArmstrongnum(153);
checkArmstrongnum(0);
checkArmstrongnum(181);
checkArmstrongnum(370);
checkArmstrongnum(371);