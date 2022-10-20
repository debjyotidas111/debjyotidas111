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


function threesummatch(n, total){

    for(let i=0; i<n.length; i++){
        for(let j=i+1; j<n.length; j++){
            for(let k=j+1; j<n.length; k++){
                if(n[i] + n[j] + n[k] == total){
                    console.log(n[i],n[j],n[k]); 
                }
            }
             //if(n[i] + n[j] == )
        }
    }

}
threesummatch([1,2,3,4,5], 10);
//console.log(threesummatch([1,2,3,4,5], 10));