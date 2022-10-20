function signCheck(num_1, num_2){
    if(num_1<0 && num_2<0){
        console.log("False");
    }else if(num_1>=0 && num_2>=0){
        console.log("False");
    }else{
        console.log("True");
    }
}

signCheck(+123, -12);
