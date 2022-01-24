$(function(){
    let url = `https://rafaelescalfoni.github.io/desenv_web/receitas.json`
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let receitasList = JSON.parse(this.responseText);
            let body = $("body");
            for (receita of receitasList) {
                body.append(montaLista(receita));
            }
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
});
function montaLista(receita) {
    let divReceita = $(".receitas");
    let titulo = $("<h2>").text(receita.nome);
    divReceita.append(titulo);

    let descricao = $("<p>").text(receita.descricao);
    divReceita.append(descricao);

    let foto = $("<img>").attr("src", receita.foto);
    divReceita.append(foto);

    let tituloIngredientes = $("h3").text("Ingredientes: ");
    divReceita.append(tituloIngredientes);

    let listaIngrediente = $("<ul>")
    for (let controle = 0; controle < receita.ingredientes.length; controle++) {
        let ingrediente = $("<li>").text(receita.ingredientes[controle])
        listaIngrediente.append(ingrediente);
    }
    divReceita.append(listaIngrediente);

    let tituloPreparo = $("<h3>").text("Preparo: ");
    divReceita.append(tituloPreparo);

    let listaPreparo = $("<ol>");
    for (let controle = 0; controle < receita.preparo.length; controle++) {
        let preparo = $("<li>").text(receita.preparo[controle]);
        listaPreparo.append(preparo);
    }
    divReceita.append(listaPreparo);

    return divReceita;
}