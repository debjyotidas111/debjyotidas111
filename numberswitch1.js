function result(number){
        if (number==0){
            console.log(number, "this is zero");
        }
        else if (number<0){
            console.log(number, "this is negative");
        }
        else if (number>0){
            console.log(number, "this is positive");
        }
        else{
            console.log(number, "invalid input");
        }
    }

result(0);
result(-5);
result(10);
result(!2);
result(5*5);
result("j");