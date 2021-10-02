const inputnascimento = document.querySelector('#nascimento')
const button = document.querySelector('button')
const span = document.querySelector('p > span')
function calcularDiferenca(){
    let nascimento = inputnascimento.value

    nascimento = new Date(nascimento)
    let atual = new Date()

    let diferencaEmTempo = Math.abs(atual - nascimento)
    let tempoEmUmDia = 1000 * 60 * 60 * 24
    let difenrencaEmDias = diferencaEmTempo / tempoEmUmDia

    return difenrencaEmDias
}
button.addEventListener('click', () => {
const diferencaDeDias = calcularDiferenca()
span.innerHTML = diferencaDeDias.toFixed(0)
})