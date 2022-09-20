function result(number){
    switch(number){
        case (number==0):{
            console.log(number, "this is zero");
        }
        case (number<0):{
            console.log(number, "this is negative");
        }
        case (number>0):{
            console.log(number, "this is positive");
        }
    }
}
result(0);
result(-5);
result(10);