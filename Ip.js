document.getElementById('numPartners').addEventListener('input', generateInvestmentInputs);

function generateInvestmentInputs() {
    const investmentsContainer = document.getElementById('investmentsContainer');
    investmentsContainer.innerHTML = '';

    const numPartners = parseInt(document.getElementById('numPartners').value);
    for (let i = 0; i < numPartners; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
            <label for="investment${i + 1}">Investment of partner #${i + 1}:</label>
            <input type="number" id="investment${i + 1}">
        `;
        investmentsContainer.appendChild(div);
    }
}

function calculateShares(investments, totalProfit) {
    let totalInvestment = investments.reduce((sum, investment) => sum + investment, 0);
    return investments.map(investment => (investment / totalInvestment) * totalProfit);
}

function calculateROI(netProfit, investment) {
    return (netProfit / investment) * 100;
}

function calculateInvestmentDetails() {
    const numPartners = parseInt(document.getElementById('numPartners').value);
    let investments = [];
    for (let i = 0; i < numPartners; i++) {
        investments.push(parseFloat(document.getElementById(`investment${i + 1}`).value));
    }

    const years = parseFloat(document.getElementById('years').value);
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);

    const totalInitialInvestment = investments.reduce((sum, investment) => sum + investment, 0);
    const totalProfit = totalAmount - totalInitialInvestment;

    const shares = calculateShares(investments, totalProfit);

    let resultsHTML = '';

    for (let i = 0; i < numPartners; i++) {
        const netProfit = shares[i] - investments[i];
        const roi = calculateROI(netProfit, investments[i]);
        resultsHTML += `
            <p>
                Share of partner #${i + 1} out of the annual profit: Rs ${shares[i].toFixed(2)}<br>
                Actual profit after subtracting initial investment: Rs ${netProfit.toFixed(2)}<br>
                ROI: ${roi.toFixed(2)}%
            </p>
        `;
    }

    document.getElementById('results').innerHTML = resultsHTML;
}
