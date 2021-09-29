const inputnascimento = document.querySelector('#nascimento')
const inputatual = document.querySelector('#atual')
const button = document.querySelector('button')
const span = document.querySelector('h1 > span')
function calcularDiferenca(){
    let nascimento = inputnascimento.value
    let atual = inputatual.value

    nascimento = new Date(nascimento)
    atual = new Date(atual)

    let diferencaEmTempo = Math.abs(atual - nascimento)
    let tempoEmUmDia = 1000 * 60 * 60 * 24
    let difenrencaEmDias = diferencaEmTempo / tempoEmUmDia

    return difenrencaEmDias
}
button.addEventListener('click', () => {
const diferencaDeDias = calcularDiferenca()
span.innerHTML = diferencaDeDias
})