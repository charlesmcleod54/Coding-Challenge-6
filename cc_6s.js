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

// Task 2
// Declare function
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;

    return 'Sales Tax: $${salesTax}';
};

// Test data
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));

// Task 3
// Write an arrow function
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;

    if (performanceRating === "Excellent") {
        bonusPercentage = 0.20;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.10;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    } else {
        return "Invalid performance rating";
    }

    const bonus = salary * bonusPercentage;

    return 'Bonus: $${bonus}';
};

// Test data
console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"));
