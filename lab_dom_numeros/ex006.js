function conversorDeTemperatura(){
    var tn1 = window.document.getElementById('txtn1')
    var resultado = window.document.getElementById('resultado')
    var fahrenheit = Number(tn1.value)
    var celsius = ((fahrenheit - 32)/9) * 5
    resultado.innerHTML = `Temperatura em Celsius: ${celsius.toFixed(2)}`
}