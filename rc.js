function calculateTotalProfit(investment, roi, years) {
    let annualProfit = (roi / 100) * investment;
    return years * annualProfit;
}

function generateInvestmentInputs() {
    const numPartners = document.getElementById('numPartners').value;
    let container = document.getElementById('investmentInputs');
    container.innerHTML = ''; // Clear any previous inputs

    for (let i = 0; i < numPartners; i++) {
        container.innerHTML += `
            <label>Investment for partner ${i + 1}:</label>
            <input type="number" id="investment${i}">
            
            <label>ROI (in percentage) for partner ${i + 1}:</label>
            <input type="number" id="roi${i}">
            <br><br>
        `;
    }
}

function calculateAndDisplay() {
    const numPartners = document.getElementById('numPartners').value;
    let investments = [];
    let rois = [];

    for (let i = 0; i < numPartners; i++) {
        investments.push(parseFloat(document.getElementById(`investment${i}`).value));
        rois.push(parseFloat(document.getElementById(`roi${i}`).value));
    }

    const years = parseFloat(document.getElementById('years').value);
    const totalProfits = investments.map((investment, index) => calculateTotalProfit(investment, rois[index], years));
    const totalAmounts = investments.map((investment, index) => investment + totalProfits[index]);

    let resultHTML = '';
    for (let i = 0; i < numPartners; i++) {
        resultHTML += `
            <p>For partner #${i + 1}:
            Initial Investment: Rs ${investments[i].toFixed(2)}
            Total Profit after ${years} years: Rs ${totalProfits[i].toFixed(2)}
            Total Amount after ${years} years: Rs ${totalAmounts[i].toFixed(2)}</p>
        `;
    }

    document.getElementById('results').innerHTML = resultHTML;
}
