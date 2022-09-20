// function maxProfit(prices , size) {

//     var maxProfit = 0;

//     for (i = 1; i < size; i++)
//         if (prices[i] > prices[i - 1])
//             maxProfit += prices[i] - prices[i - 1];
//     return maxProfit;
// }


//     var price = [ 200, 280, 360, 410, 140, 535, 695 ];
//     var n = price.length;

//     console.log(maxProfit(price, n));




    
    function findMaxProfit(array){
        let maxProfit = 0;
        let buyingPrice = 0;
        let sellingPrice = 0;
        let changeBuyingPrice = true;
        for(let i=0; i<array.length-1; i++){
            sellingPrice = array[i+1];
            if(changeBuyingPrice){
                buyingPrice = array[i];
            }
            if(sellingPrice<buyingPrice){
                // loss
                changeBuyingPrice=true;
            }else{
                // profit
                let profit = sellingPrice-buyingPrice;
                if(profit>maxProfit){
                    maxProfit=profit;
                }
                changeBuyingPrice = false;
            }
        }
        console.log(maxProfit);
    }
    
    findMaxProfit([100, 180, 260, 310, 695, 535, 40]);








// function maxProfit(price, start, end){
//     if(end<=start)
//     return 0;
//     let profit = 0;
//     for(let i=start; i<end; i++){
//         for(let j=i+1; j<=end; j++){
//             if(price[j]>price[i]){
//                 let currentProfit = price[j]- price[i] 
//                 + maxProfit(price, start, i-1)
//                 + maxProfit(price, j+1, end);
//                 profit = Math.max(profit, currentProfit);
//             }
//         }
//     }
//     return profit;
// }
