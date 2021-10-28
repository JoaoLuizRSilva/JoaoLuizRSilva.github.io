window.onload = function () {
    let url = `https://rafaelescalfoni.github.io/desenv_web/filmes.json`
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let filmesList = JSON.parse(this.responseText);
            let body = document.getElementsByTagName("body")[0];
            for (filme of filmesList) {
                body.appendChild(montaDiv(filme));
            }
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}
function montaDiv(filme) {
    let divFilme = document.createElement("div");
    divFilme.classList.add("filme")

    let titulo = document.createElement("h2");
    let tituloText = document.createTextNode(filme.titulo);
    titulo.appendChild(tituloText);
    divFilme.appendChild(titulo);

    let foto = document.createElement("img");
    foto.src = filme.figura;
    divFilme.appendChild(foto);

    let resumo = document.createElement("p");
    let resumoText = document.createTextNode(filme.resumo);
    resumo.appendChild(resumoText);
    divFilme.appendChild(resumo);

    let classificacaoIndicativa = document.createElement("p");
    classificacaoIndicativa.classList.add("classificacao")
    let classificacaoIndicativaText = document.createTextNode(filme.classificacao)
    if (filme.classificacao >= 18) {
        classificacaoIndicativa.style.backgroundColor = '#8C0303'
    } else if (filme.classificacao > 14) {
        classificacaoIndicativa.style.backgroundColor = '#F29F05'
    } else {
        classificacaoIndicativa.style.backgroundColor = '#038C4C'
    }
    if (filme.classificacao == 0) {
        classificacaoIndicativaText = document.createTextNode(`Livre`)
    }
    classificacaoIndicativa.appendChild(classificacaoIndicativaText);
    divFilme.appendChild(classificacaoIndicativa);

    let tituloGeneros = document.createElement("h3");
    let tituloGenerosText = document.createTextNode("Generos:")
    tituloGeneros.appendChild(tituloGenerosText);
    divFilme.appendChild(tituloGeneros);

    let listaGeneros = document.createElement("ul");
    for (let controle = 0; controle < filme.generos.length; controle++) {
        let genero = document.createElement("li");
        let generoText = document.createTextNode(filme.generos[controle]);
        genero.appendChild(generoText);
        listaGeneros.appendChild(genero);
    }
    divFilme.appendChild(listaGeneros);

    let semelhantes = document.createElement("h3");
    let semelhantesText = document.createTextNode("Títulos semelhantes:");
    semelhantes.appendChild(semelhantesText);
    divFilme.appendChild(semelhantes);

    let listaSemelhantes = document.createElement("ul");
    for (let controle = 0; controle < filme.titulosSemelhantes.length; controle++) {
        let titulosSemelhante = document.createElement("li");
        let titulosSemelhanteText = document.createTextNode(filme.titulosSemelhantes[controle]);
        let filmeId = filme.titulosSemelhantes[controle];
        let nomeSemelhante;
        switch (filmeId) {
            case 1:
                nomeSemelhante = "Better Call Saul";
                break;
            case 2:
                nomeSemelhante = "Breaking Bad";
                break;
            case 3:
                nomeSemelhante = "House of Cards";
                break;
            case 4:
                nomeSemelhante = "Narcos";
                break;
            case 5:
                nomeSemelhante = "Carros";
                break;
            case 6:
                nomeSemelhante = "Carros 2";
                break;
            case 7:
                nomeSemelhante = "Uma Família da Pesada";
                break;
            case 8:
                nomeSemelhante = "Valente";
                break;
            case 9:
                nomeSemelhante = "Friends";
                break;
            case 10:
                nomeSemelhante = "House";
                break;
            case 11:
                nomeSemelhante = "Mãos talentosas";
                break;
            case 12:
                nomeSemelhante = "Família Moderna";
                break;
            case 13:
                nomeSemelhante = "Scarface";
                break;
            case 14:
                nomeSemelhante = "That '70s show";
                break;
            case 15:
                nomeSemelhante = "Zumbilândia";
                break; 
        }
        titulosSemelhanteText = document.createTextNode(nomeSemelhante)
        titulosSemelhante.appendChild(titulosSemelhanteText);
        listaSemelhantes.appendChild(titulosSemelhante);
    }
    divFilme.appendChild(listaSemelhantes);

    let tituloElenco = document.createElement("h3");
    let tituloElencoText = document.createTextNode("Elenco:")
    tituloElenco.appendChild(tituloElencoText);
    divFilme.appendChild(tituloElenco);

    let listaElenco = document.createElement("ul");
    for (let controle = 0; controle < filme.elenco.length; controle++) {
        let nome = document.createElement("li");
        let nomeText = document.createTextNode(filme.elenco[controle]);
        nome.appendChild(nomeText);
        listaElenco.appendChild(nome);
    }
    divFilme.appendChild(listaElenco)

    let tituloOpinioes = document.createElement("h3");
    let tituloOpinioesText = document.createTextNode("Opinioes:")
    tituloOpinioes.appendChild(tituloOpinioesText);
    divFilme.appendChild(tituloOpinioes);

    let listaOpinioes = document.createElement("ul");
    for (let controle = 0; controle < filme.opinioes.length; controle++) {
        let avaliacao = document.createElement("li");
        let avaliacaoText = document.createTextNode(`Nota: ${filme.opinioes[controle].rating}.  Comentários: ${filme.opinioes[controle].descricao}`);
        avaliacao.appendChild(avaliacaoText);
        listaOpinioes.appendChild(avaliacao);
    }
    divFilme.appendChild(listaOpinioes)

    return divFilme;
}