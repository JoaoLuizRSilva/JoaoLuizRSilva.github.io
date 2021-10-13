const dataStr1 = document.querySelector('#dataStr1')
const dataStr2 = document.querySelector('#dataStr2')
const button = document.querySelector('button')
const span = document.querySelector('p > span')
function calcularDiferenca(){
    let data01 = dataStr1.value
    let data02 = dataStr2.value

    data01 = new Date(data01)
    data02 = new Date(data02)

    let diferencaEmTempo = Math.abs(data02 - data01)
    let tempoEmUmaSemana = 1000 * 60 * 60 * 24 * 7
    let diferencaEmSemanas = diferencaEmTempo / tempoEmUmaSemana

    return diferencaEmSemanas
}
button.addEventListener('click', () => {
const diferencaDeSemanas = calcularDiferenca()
span.innerHTML = diferencaDeSemanas.toFixed(0)
})