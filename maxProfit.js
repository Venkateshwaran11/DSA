const prices = [7, 1, 5, 3, 6, 4];

function maxProfie(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i=0; i<prices.length; i++){
        let currentProfit = prices[i] - minPrice; // 7-7=0, 1-7 = -6, 5-1 =4
        maxProfit = Math.max(maxProfit,currentProfit) // 0, 1, 5
        minPrice = Math.min(minPrice,prices[i]) //  7, 1,1
    }
    return maxProfit
}

console.log(maxProfie(prices))