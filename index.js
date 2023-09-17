document.getElementById('profitForm').onsubmit = function(event) {
    event.preventDefault();

    const CP = parseFloat(document.getElementById('costPrice').value);
    const SP = parseFloat(document.getElementById('sellingPrice').value);
    const numArticles = parseInt(document.getElementById('numberOfArticles').value);

    // Calculate the total Cost Price for all articles
    const totalCP = CP * numArticles;

    // Calculate total profit for one article
    const profitPerArticle = SP - CP;

    // Calculate total profit for all articles
    const totalProfit = profitPerArticle * numArticles;

    // Calculate the profit percentage
    const profitPercent = (profitPerArticle / CP) * 100;

    let resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = `
        Cost Price for ${numArticles} articles: ₹${totalCP.toFixed(2)}<br>
        Profit Per Article: ₹${profitPerArticle.toFixed(2)}<br>
        Total Profit for ${numArticles} articles: ₹${totalProfit.toFixed(2)}<br>
        Profit Percentage: ${profitPercent.toFixed(2)}%
    `;
}



