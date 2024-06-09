function calculateSplit() {
  const currencySelect = document.getElementById("currency");
  const selectedCurrency = currencySelect.value;
  const income = document.getElementById("income").value;
  const fiftyPercent = (income * 0.5).toFixed(2);
  const thirtyPercent = (income * 0.3).toFixed(2);
  const twentyPercent = (income * 0.2).toFixed(2);
  let currencySymbol;
  switch (selectedCurrency) {
    case "PHP":
      currencySymbol = "₱";
      break;
    case "EUR":
      currencySymbol = "€";
      break;
    case "USD":
      currencySymbol = "$";
      break;
    case "JPY":
      currencySymbol = "¥";
      break;
    case "GBP":
      currencySymbol = "£";
      break;
    case "AUD":
      currencySymbol = "A$";
      break;
    case "CAD":
      currencySymbol = "C$";
      break;
    case "CHF":
      currencySymbol = "CHF";
      break;
    // Add more cases for other currencies
    default:
      currencySymbol = "";
  }
  
  document.getElementById("result").innerHTML = `
    <p>50%: ${currencySymbol}${fiftyPercent}</p>
    <p>30%: ${currencySymbol}${thirtyPercent}</p>
    <p>20%: ${currencySymbol}${twentyPercent}</p>
  `;}