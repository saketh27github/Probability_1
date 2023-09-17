document.getElementById('markupForm').onsubmit = function(event) {
    event.preventDefault();

    const CP = parseFloat(document.getElementById('costPrice').value);
    const profitPercent = parseFloat(document.getElementById('profitPercentage').value) / 100;
    const discountPercent = parseFloat(document.getElementById('discountPercentage').value) / 100;

    // Calculate the markup percentage
    const markup = (1 + profitPercent) / (1 - discountPercent) - 1;
    const markupPercentage = markup * 100;

    // Calculate the Marked Price (MP)
    const MP = CP * (1 + markup);

    // Calculate the Discount Amount
    const discountAmount = MP * discountPercent;

    // Calculate the Selling Price (SP)
    const SP = MP - discountAmount;

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        Required Markup Percentage Above Cost Price: ${markupPercentage.toFixed(2)}%<br>
        Marked Price (MP): ₹${MP.toFixed(2)}<br>
        Discount Amount: ₹${discountAmount.toFixed(2)}<br>
        Selling Price (SP): ₹${SP.toFixed(2)}
    `;
}
