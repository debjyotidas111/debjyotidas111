function Add(x,y){
    return x+y;
    }
    function Substract(x,y){
        return x-y;
    }
    function Multiply(x,y){
        return x*y;
    }
    
    function Divide(x,y){
        return x/y;
    }
    function Sqrt(num, precision = 0){
        if (num <= 0) {
            return 0;
         };
         let res = 1;
         const deviation = 1 / (10 ** precision);
         while (Math.abs(num - (res ** 2)) > deviation) {
            res -= ((res ** 2) - num) / (2 * res);
         };
         return Math.round(res * (10 ** precision)) / (10 ** precision);
      }
    function power(x,y){
        return x**y;
    }
    console.log(Add(5,6));
    console.log(Substract(6,5));
    console.log(Multiply(5,6));
    console.log(Divide(24,6));
    console.log(Sqrt(25));
    console.log(power(5,2));