window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }
}
function montaDiv(receita) {
    let divReceita = document.createElement("div");
    divReceita.classList.add("receita");
    let titulo = document.createElement("h2");
    let tituloText = document.createTextNode(receita.nome);
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    let foto = document.createElement("img");
    foto.src = receita.foto;
    let tituloIngredientes = document.createElement("h3");
    let tituloIngredientesText = document.createTextNode("Ingredientes:"); 
    let listaIngrediente = document.createElement("ul");
    for (let controle = 0; controle < receita.ingredientes.length; controle++) {
        let ingrediente = document.createElement("li");
        let ingredienteText = document.createTextNode(receita.ingredientes[controle]);
        ingrediente.appendChild(ingredienteText);
        listaIngrediente.appendChild(ingrediente);
    }
    let tituloPreparo = document.createElement("h3");
    let tituloPreparoText = document.createTextNode("Preparo:");
    let listaPreparo = document.createElement("ol");
    for (let controle = 0; controle < receita.preparo.length; controle++) {
        let preparo = document.createElement("li");
        let preparoText = document.createTextNode(receita.preparo[controle]);
        preparo.appendChild(preparoText);
        listaPreparo.appendChild(preparo);
    }
    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    tituloIngredientes.appendChild(tituloIngredientesText);
    tituloPreparo.appendChild(tituloPreparoText);
    divReceita.appendChild(titulo);
    divReceita.appendChild(descricao);
    divReceita.appendChild(foto);
    divReceita.appendChild(tituloIngredientes);
    divReceita.appendChild(listaIngrediente);
    divReceita.appendChild(tituloPreparo);
    divReceita.appendChild(listaPreparo);
    return divReceita;
}