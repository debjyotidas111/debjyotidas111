
	function binomialCoefficient(num, k){
    if (k > num)
    return 0;
    
    if (k == 0 || k == num)
    return 1;

    return binomialCoefficient(num - 1, k - 1)
    + binomialCoefficient (num - 1, k);
      
    }

    var num = 6, k = 3;
    console.log("Value of C("+num +", "+k+") is "+binomialCoefficient(num, k));
