function computeValues(CP, profitPercentage, discountPercentage, salesTax) {
    const profitAmount = (profitPercentage / 100) * CP;
    const markedPrice = CP + profitAmount;
    const discountAmount = (discountPercentage / 100) * markedPrice;
    const afterDiscount = markedPrice - discountAmount;
    const salesTaxAmount = (salesTax / 100) * afterDiscount;
    const finalSP = afterDiscount + salesTaxAmount;

    return {
        markedPrice,
        discountAmount,
        afterDiscount,
        salesTaxAmount,
        finalSP,
        profitAmount
    };
}

function calculatePrice() {
    // Getting values from the form
    const CP = parseFloat(document.getElementById("costPrice").value);
    const profitPercentage = parseFloat(document.getElementById("profitPercentage").value);
    const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);
    const salesTax = parseFloat(document.getElementById("salesTax").value);

    // Computing the values
    const results = computeValues(CP, profitPercentage, discountPercentage, salesTax);

    // Displaying the results in the page
    document.getElementById("results").innerHTML = `
        Marked Price (Before Discount): ₹${results.markedPrice.toFixed(2)}<br>
        Discount Amount: ₹${results.discountAmount.toFixed(2)}<br>
        Price After Discount (Before Sales Tax): ₹${results.afterDiscount.toFixed(2)}<br>
        Sales Tax Amount: ₹${results.salesTaxAmount.toFixed(2)}<br>
        Final Selling Price (After Sales Tax): ₹${results.finalSP.toFixed(2)}<br>
        Profit Amount: ₹${results.profitAmount.toFixed(2)}
    `;
}

