// Função para carregar o arquivo JSON
function carregarJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'arquivo.json', true);
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) {
          callback(xobj.responseText);
        }
  };
  xobj.send(null);
}
  
// Função para adicionar os dados ao DOM
function adicionarDadosAoDOM(json) {
  let dados = JSON.parse(json);
  const conteudoDiv = document.querySelector('.conteudo');
  // Iterar sobre cada item no JSON
  dados.forEach(function(item) {
    conteudoDiv.innerHTML += `
      <h2>${item.nome}</h2>
      <p>${item.descrição}</p>
      <a href="${item.url_site}" target="_blank">Visite o site</a><br>
      <img src="${item.url_imagem}" alt="${item.nome}" width="200">
    `;
  });
}
  
// Carregar o JSON e adicionar ao DOM quando a página carregar
window.onload = function() {
  carregarJSON(adicionarDadosAoDOM);
};