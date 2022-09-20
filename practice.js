function findProfit(array){
     var maxProfit = 0;
     var buyPrice = 0;
     var sellPrice = 0;
     var chnageBuyingPrice = true;
     for(let i=0; i<array.length; i++){   // both i<array.length and i<array.length-1 working
        sellPrice = array[i+1];
        chnageBuyingPrice = true;
        // if(chnageBuyingPrice){
            buyPrice = array[i];
        if(sellPrice<buyPrice){
            chnageBuyingPrice = true;
        }
        let profit = sellPrice - buyPrice;
        if(profit>maxProfit){
            maxProfit = profit;
            chnageBuyingPrice =false;
        }
     }
     console.log(maxProfit);
}
findProfit([20, 66,78,45,89,2,678,77]);