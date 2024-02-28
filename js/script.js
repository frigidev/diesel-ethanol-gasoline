//Calculate if it is better to use Ethanol, Gasoline or Diesel
function calculateBestPrice() {
//Receive and store user inputs
  const ethanolPriceInput = document.getElementById('ethanol');
  const gasolinePriceInput = document.getElementById('gasoline');
  const dieselPriceInput = document.getElementById('diesel');
  const elementResult = document.getElementById('result');
    
//Ensure that the inputs will be conveted in valid real numbers
  const ethanolPrice = parseFloat(priceEthanolInput.value);
  const gasolinePrice = parseFloat(priceGasolineInput.value);
  const dieselPrice = parseFloat(priceDieselInput.value);
    
//Validations for the user inputs (confirm that are positive numbers)
  if (isNaN(ethanolPrice) || ethanolPrice <= 0) {
    alert('Type a valid value for the price of ethanol');
    ethanolPriceInput.value = '';
    ethanolPriceInput.focus();
    return;
  }
  
  if (isNaN(gasolinePrice) || gasolinePrice <= 0) {
    alert('Type a valid value for the price of gasoline');
    gasolinePriceInput.value = '';
    gasolinePriceInput.focus();
    return;
  }
  
  if (isNaN(dieselPrice) || dieselPrice <= 0) {
    alert('Type a valid value for the price of diesel');
    dieselPriceInput.value = '';
    dieselPriceInput.focus();
    return;
  }

//Variables declaration for processing
  const ethanolDistance = 10;
  const gasolineDistance = 13.5;
  const dieselDistance = 23;
  
  let result = '';
    
//Processing
  let quotient = ethanolDistance / ethanolPrice;
  
  if (gasolineDistance / gasolinePrice > quotient) {
    quotient = gasolineDistance / gasolinePrice;
    result = 'Gasoline';
  } else if (dieselDistance / dieselPrice > quotient) {
    result = 'Diesel';
  } else {
    result = 'Ethanol';
  }
//Result output
  elementResult.innerText = 'Result: ' + result;
}
