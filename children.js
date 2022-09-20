function temperature(celcius, raining){
    if(celcius>20 && celcius<=25, !raining){ // we can write raining==false
    console.log("children can play outside");
    }
    else if(celcius>=18 && celcius<=20, raining ){  // we can write raining==true
        console.log("children can play inside");
    }
    else("invalid input");
}
temperature(24, false);
temperature(18, true);
  

 var a = 10;
 var b = 20;
console.log(a=b);
console.log(a!=b);