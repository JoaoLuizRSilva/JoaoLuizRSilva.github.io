function media(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var tn3 = window.document.getElementById('txtn3')
    var resultado = window.document.getElementById('resultado')
    var nota01 = Number(tn1.value)
    var nota02 = Number(tn2.value)
    var nota03 = Number(tn3.value)
    var mediaFinal = (nota01 * 2 + nota02 * 3 + nota03 * 5) / 10
    resultado.innerHTML = `Valor da média final: ${mediaFinal}`
}