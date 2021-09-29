function salario(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var resultado = window.document.getElementById('resultado')
    var salario = Number(tn1.value)
    var percentual = Number(tn2.value)
    var NovoSalario = salario + (salario*(percentual/100))
    resultado.innerHTML = `Novo salário: ${NovoSalario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}`
}