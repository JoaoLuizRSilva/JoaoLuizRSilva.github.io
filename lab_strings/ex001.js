function inverterString(){
    var tn1 = window.document.getElementById('txtn1')
    var resultado = window.document.getElementById('resultado')
    var texto = String(tn1.value)
    var textoInvertido = texto.split("").reverse().join("")
    resultado.innerHTML = textoInvertido
}