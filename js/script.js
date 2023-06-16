function calcularMelhorPreco(){ 
    //Calcular se é melhor usar Etanol, Gasolina ou Diesel

    let precoEtanol = document.getElementById('etanol').value
    let distanciaEtanol = 10
    let precoGasolina = document.getElementById('gasolina').value
    let distanciaGasolina = 13.5
    let precoDiesel = document.getElementById('diesel').value
    let distanciaDiesel = 23       
    
    let resultado = ''

    if(precoEtanol == ''){ 
      alert ('Preencha o preço do etanol')
    }
    else if(precoGasolina == ''){
      alert ('Preencha o preço da gasolina')
    }
    else if(precoDiesel == ''){
      alert ('Preencha o preço do diesel')
    }
    else{
      let coeficiente = distanciaEtanol / precoEtanol
      if(distanciaGasolina / precoGasolina > coeficiente){
        coeficiente = distanciaGasolina / precoGasolina
        resultado = 'Gasolina'
      }
      else if(distanciaDiesel / precoDiesel > coeficiente){
        resultado = 'Diesel'
      }
      else{resultado = 'Etanol'}

      document.getElementById('resultado').innerText = "Resultado: " + resultado
    }
