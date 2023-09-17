function calculateSellingDetails(costPrice, profitPercent, discountPercent, years) {
    // Calculate the profit amount
    const profitAmount = (profitPercent / 100) * costPrice;
    
    // Calculate the selling price before discount (SP1)
    const sp1 = costPrice + profitAmount;
    
    // Calculate the discount amount
    const discountAmount = (discountPercent / 100) * sp1;
    
    // Calculate the final selling price after discount
    const finalSP = sp1 - discountAmount;
    
    // Calculate the ROI (assuming annual return)
    const roi = (profitAmount * years) / costPrice * 100;

    // Profit Percentage
    const actualProfitPercent = (profitAmount * years) / costPrice * 100;

    return {profitAmount, discountAmount, finalSP, roi, actualProfitPercent};
}

function calculateAndDisplay() {
    // Take inputs from the user
    const costPrice = parseFloat(prompt("Enter the original cost price (e.g., 600000): "));
    const profitPercent = parseFloat(prompt("Enter the profit percentage (e.g., 5 for 5%): "));
    const discountPercent = parseFloat(prompt("Enter the discount percentage (e.g., 2 for 2%): "));
    const years = parseFloat(prompt("Enter the number of years: "));

    // Calculate selling price details
    const {profitAmount, discountAmount, finalSP, roi, actualProfitPercent} = calculateSellingDetails(costPrice, profitPercent, discountPercent, years);

    // Display the results
    alert(`Profit Amount: Rs ${profitAmount.toFixed(2)}
    Profit Percentage over ${years} years: ${actualProfitPercent.toFixed(2)}%
    Discount Amount: Rs ${discountAmount.toFixed(2)}
    Final Selling Price after Discount: Rs ${finalSP.toFixed(2)}
    ROI over ${years} years: ${roi.toFixed(2)}%`);
}
