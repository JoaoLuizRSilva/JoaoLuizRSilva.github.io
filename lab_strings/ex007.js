function dataPorExntenso () {
    const dataStr = window.document.getElementById('txtn1')
    let resultado = window.document.getElementById('resultado')
    let mes = new Date(dataStr.value).getUTCMonth()
    let dia = new Date(dataStr.value).getUTCDate()
    let ano = new Date(dataStr.value).getFullYear()
    let mesPorExtenso
    switch (mes) {
        case 0:
            mesPorExtenso = 'Janeiro'
            break
        case 1:
            mesPorExtenso = 'Fevereiro'
            break
        case 2:
            mesPorExtenso = 'Março'
            break
        case 3:
            mesPorExtenso = 'Abril'
            break
        case 4:
            mesPorExtenso = 'Maio'
            break
        case 5:
            mesPorExtenso = 'Junho'
            break
        case 6:
            mesPorExtenso = 'Julho'
            break
        case 7:
            mesPorExtenso = 'Agosto'
            break
        case 8:
            mesPorExtenso = 'Setembro'
            break
        case 9:
            mesPorExtenso = 'Outubro'
            break
        case 10:
            mesPorExtenso = 'Novembro'
            break
        case 11:
            mesPorExtenso = 'Dezembro'
        default:
            break;
    }
    resultado.innerHTML = `<p>${dia} de ${mesPorExtenso} de ${ano}</p>`
}