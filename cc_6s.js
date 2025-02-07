// Task 1
// Write functions
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profitPerUnit = sellingPrice - costPrice;

    const totalProfit = profitPerUnit * unitsSold;

    return 'Total Profit: $${totalProfit}';
}

// Test data
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));
