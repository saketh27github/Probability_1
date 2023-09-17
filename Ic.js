function calculateInvestmentMetrics() {
    const originalCost = parseFloat(document.getElementById('originalCost').value);
    const profitPercent = parseFloat(document.getElementById('profitPercent').value);
    const years = parseFloat(document.getElementById('years').value);

    // Calculate metrics
    const profit = (profitPercent / 100) * originalCost;
    const sellingPrice = originalCost + profit;
    const annualizedROI = profitPercent / years;
    const overallProfitPercent = (profit / originalCost) * 100;
    const peRatio = sellingPrice / profit;

    // Display results
    const resultsHTML = `
        <p>Profit Amount: Rs ${profit.toFixed(2)}</p>
        <p>Selling Price: Rs ${sellingPrice.toFixed(2)}</p>
        <p>Annualized ROI: ${annualizedROI.toFixed(2)}%</p>
        <p>Overall Profit Percentage: ${overallProfitPercent.toFixed(2)}%</p>
        <p>P/E Ratio: ${peRatio.toFixed(2)}</p>
    `;
    document.getElementById('results').innerHTML = resultsHTML;
}
