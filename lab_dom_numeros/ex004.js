function trianguloRetangulo(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var resultado = window.document.getElementById('resultado')
    var cateto01 = Number(tn1.value)
    var cateto02 = Number(tn2.value)
    var hipotenusa = Math.sqrt((cateto01**2) + (cateto02**2))
    resultado.innerHTML = `Valor da hipotenusa: ${hipotenusa.toFixed(2)}`
}