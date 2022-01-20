$(function(){
    let url = `https://rafaelescalfoni.github.io/desenv_web/receitas.json`
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let receitasList = JSON.parse(this.responseText);
            let body = $("body")[0];
            for (receita of receitasList) {
                body.appendChild(montaLista(receita));
            }
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
});
function montaLista(receita) {
    //let texto = $(".receitas")//.html(`<h2>${receita.descricao}</h2>`);
    //texto.text(receita.nome);

    let divReceita = document.createElement("div");
    divReceita.classList.add("receita");
    let titulo = document.createElement("h2");
    let tituloText = document.createTextNode(receita.nome);
    titulo.appendChild(tituloText);
    divReceita.appendChild(titulo);

    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    descricao.appendChild(descricaoText);
    divReceita.appendChild(descricao);

    let foto = document.createElement("img");
    foto.src = receita.foto;
    divReceita.appendChild(foto);

    let tituloIngredientes = document.createElement("h3");
    let tituloIngredientesText = document.createTextNode("Ingredientes:");
    tituloIngredientes.appendChild(tituloIngredientesText);
    divReceita.appendChild(tituloIngredientes);

    let listaIngrediente = document.createElement("ul");
    for (let controle = 0; controle < receita.ingredientes.length; controle++) {
        let ingrediente = document.createElement("li");
        let ingredienteText = document.createTextNode(receita.ingredientes[controle]);
        ingrediente.appendChild(ingredienteText);
        listaIngrediente.appendChild(ingrediente);
    }
    divReceita.appendChild(listaIngrediente);

    let tituloPreparo = document.createElement("h3");
    let tituloPreparoText = document.createTextNode("Preparo:");
    tituloPreparo.appendChild(tituloPreparoText);
    divReceita.appendChild(tituloPreparo)
    let listaPreparo = document.createElement("ol");
    for (let controle = 0; controle < receita.preparo.length; controle++) {
        let preparo = document.createElement("li");
        let preparoText = document.createTextNode(receita.preparo[controle]);
        preparo.appendChild(preparoText);
        listaPreparo.appendChild(preparo);
    }
    divReceita.appendChild(listaPreparo);

    return divReceita;
}