function calculateTotalProfit(investment, roi, years) {
    let annualProfit = (roi / 100) * investment;
    return years * annualProfit;
}

function generateInvestmentFields() {
    const numPartners = document.getElementById('numPartners').value;
    const investmentFieldsDiv = document.getElementById('investmentFields');
    investmentFieldsDiv.innerHTML = '';

    for (let i = 0; i < numPartners; i++) {
        investmentFieldsDiv.innerHTML += `
        Investment of Partner #${i + 1}: <input type="number" class="investment" placeholder="Enter Investment" required><br>
        ROI (in percentage) for Partner #${i + 1}: <input type="number" class="roi" placeholder="Enter ROI" required><br>
        `;
    }
}

function calculateAndDisplayTotalProfit() {
    const investments = Array.from(document.querySelectorAll('.investment')).map(input => parseFloat(input.value));
    const rois = Array.from(document.querySelectorAll('.roi')).map(input => parseFloat(input.value));
    const years = parseFloat(document.getElementById('years').value);

    let totalProfits = investments.map((investment, index) => calculateTotalProfit(investment, rois[index], years));
    let totalAmounts = investments.map((investment, index) => investment + totalProfits[index]);

    // Display the results in the results div
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (let i = 0; i < investments.length; i++) {
        resultsDiv.innerHTML += `
        For Partner #${i + 1}:<br>
        Initial Investment: ₹${investments[i].toFixed(2)}<br>
        Total Profit after ${years} years: ₹${totalProfits[i].toFixed(2)}<br>
        Total Amount after ${years} years: ₹${totalAmounts[i].toFixed(2)}<br><br>
        `;
    }
}
