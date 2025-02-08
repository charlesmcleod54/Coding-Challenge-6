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

// Task 4
// Write a function that calcultaes cost
function calculateSubscriptionCost (plan, months, discount = 0) {
    const pricing = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };

    const baseCost = pricing[plan];

    if (!baseCost) {
        return "Invalid plan";
    }

    const totalCost = baseCost * months;

    const discountedCost = totalCost - (totalCost * (discount / 100));

    return 'Total Cost: $${discountedCost}';
}

// Test data
console.log(calculateSubscriptionCost("Basic", 6, 10));
console.log(calculateSubscriptionCost("Premium", 12, 0));

// Task 5
// Write a function that returns the converted amount
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;

    return 'Converted Amount: $${convertedAmount.toFixed(2)}';
}

// Test data
console.log(convertCurrency(100, 1.1));
console.log(convertCurrency(250, 0.85));

// Task 6
// Declare an array of orders
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(discountedOrders);

// Task 7
// Write a function that returns another function to add expenses and keep a running total
function createExpenseTracker() {
    let totalExpenses = 0;

    return function(expenses) {
        totalExpenses += expenses;
        return 'Total Expenses: $${totalExpenses}';
    };
}

// Test data
let tracker = createExpenseTracker();
console.log(tracker(200));
console.log(tracker(150));

// Task 8
// Write a recursive function that determines years to reach level 10
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return 0;
    }

    const yearsToNextLevel = 2;
    return yearsToNextLevel + calculateYearsToPromotion(employeeLevel + 1);
}

// Test data
console.log('Years to Level 10: ${calculateYearsToPromotion(7)}');
console.log('Years to Level 10: ${calculateYearsToPromotion(5)}');
