//Calcular se é melhor usar Etanol, Gasolina ou Diesel v2.0
function calcularMelhorPreco() {
//Recebe as entradas do Usuário    
  const precoEtanolEntrada = document.getElementById('etanol');
  const precoGasolinaEntrada = document.getElementById('gasolina');
  const precoDieselEntrada = document.getElementById('diesel');
  const resultadoElemento = document.getElementById('resultado');
    
//Garante que as entradas serão convertidas em números reais válidos
  const precoEtanol = parseFloat(precoEtanolEntrada.value);
  const precoGasolina = parseFloat(precoGasolinaEntrada.value);
  const precoDiesel = parseFloat(precoDieselEntrada.value);
    
//Validações para as entradas do usuário (confirmar que são números positivos)
  if (isNaN(precoEtanol) || precoEtanol <= 0) {
    alert('Digite um valor válido para o preço do etanol');
    precoEtanolEntrada.value = '';
    precoEtanolEntrada.focus();
    return;
  }
  
  if (isNaN(precoGasolina) || precoGasolina <= 0) {
    alert('Digite um valor válido para o preço da gasolina');
    precoGasolinaEntrada.value = '';
    precoGasolinaEntrada.focus();
    return;
  }
  
  if (isNaN(precoDiesel) || precoDiesel <= 0) {
    alert('Digite um valor válido para o preço do diesel');
    precoDieselEntrada.value = '';
    precoDieselEntrada.focus();
    return;
  }

//Declaração de variáveis para o processamento
  const distanciaEtanol = 10;
  const distanciaGasolina = 13.5;
  const distanciaDiesel = 23;
  
  let resultado = '';
    
//Processamento
  let coeficiente = distanciaEtanol / precoEtanol;
  
  if (distanciaGasolina / precoGasolina > coeficiente) {
    coeficiente = distanciaGasolina / precoGasolina;
    resultado = 'Gasolina';
  } else if (distanciaDiesel / precoDiesel > coeficiente) {
    resultado = 'Diesel';
  } else {
    resultado = 'Etanol';
  }
//Saída de resultados
  resultadoElemento.innerText = 'Resultado: ' + resultado;
}//Fim função
