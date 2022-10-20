// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; i++){
        // The day we should buy at
        min = Math.min(min, prices[i-1])
        // Check if selling at the current day gives us the most profit
        profit = Math.max(prices[i]-min, profit)
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4])); //5

//  leetcode_121_buysellstock.js