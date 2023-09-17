
function calculateShares(investments, totalProfit) {
    let totalInvestment = investments.reduce((sum, investment) => sum + investment, 0);
    let shares = investments.map(investment => (investment / totalInvestment) * totalProfit);
    return shares;
}

function calculateROI(netProfit, investment) {
    return (netProfit / investment) * 100;
}

function generateInvestmentFields() {
    const numPartners = document.getElementById('numPartners').value;
    const investmentFieldsDiv = document.getElementById('investmentFields');
    investmentFieldsDiv.innerHTML = '';

    for (let i = 0; i < numPartners; i++) {
        investmentFieldsDiv.innerHTML += `Investment of Partner #${i + 1}: <input type="number" class="investment" placeholder="Enter Investment" required><br>`;
    }
}

function calculateAndDisplayPartnersShare() {
    const investments = Array.from(document.querySelectorAll('.investment')).map(input => parseFloat(input.value));
    const years = parseFloat(document.getElementById('years').value);
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const totalInitialInvestment = investments.reduce((sum, investment) => sum + investment, 0);
    const totalProfit = totalAmount - totalInitialInvestment;
    const shares = calculateShares(investments, totalProfit);

    // Display the results in the results div
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (let i = 0; i < investments.length; i++) {
        const netProfit = shares[i] - investments[i];
        const roi = calculateROI(netProfit, investments[i]);
        resultsDiv.innerHTML += `
            Share of Partner #${i + 1}: ₹${shares[i].toFixed(2)}<br>
            Actual Profit: ₹${netProfit.toFixed(2)}<br>
            ROI: ${roi.toFixed(2)}%<br><br>
        `;
    }
}
