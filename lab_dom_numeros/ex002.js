function maior(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var resultado = window.document.getElementById('resultado')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    if(n1 > n2){
        resultado.innerHTML = `<strong>${n1}</strong> é o maior número.`
    }else{
        resultado.innerHTML = `<strong>${n2}</strong> é o maior número.`
    }
}