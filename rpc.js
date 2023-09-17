document.getElementById('calculatorForm').onsubmit = function(event) {
    event.preventDefault();

    const CP = parseFloat(document.getElementById('costPrice').value);
    const markupPercent = parseFloat(document.getElementById('markupPercentage').value) / 100;
    const discountPercent = parseFloat(document.getElementById('discountPercentage').value) / 100;

    // Calculating Marked Price (MP)
    const MP = CP + (CP * markupPercent);

    // Calculating Discount Amount
    const discountAmount = MP * discountPercent;

    // Calculating Selling Price (SP)
    const SP = MP - discountAmount;

    // Calculating Profit
    const profit = SP - CP;

    // Calculating Profit Percentage
    const profitPercent = (profit / CP) * 100;

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Marked Price (MP): ₹${MP.toFixed(2)}<br>
                            Discount Amount: ₹${discountAmount.toFixed(2)}<br>
                            Selling Price (SP): ₹${SP.toFixed(2)}<br>
                            Profit Amount: ₹${profit.toFixed(2)}<br>
                            Profit Percentage: ${profitPercent.toFixed(2)}%`;
}
