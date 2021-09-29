function primo(){
    var tn1 = window.document.getElementById('txtn1')
    var resultado = window.document.getElementById('resultado')
    var numero = Number(tn1.value)
    var c = 1
    var contDiv = 0
    while(c < numero){
        if(numero % c === 0){
            contDiv = contDiv + 1
        }
        c = c + 1
    }
    if(contDiv >= 2){
        resultado.innerHTML = `<strong>${numero}</strong> não e primo.`
    }else{
        resultado.innerHTML = `<strong>${numero}</strong> é primo.`
    }
}