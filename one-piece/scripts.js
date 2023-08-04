const personangens = document.querySelectorAll(".personagem");
const descricaoPersonangens = {
    'luffy': 'Luffy é  um pirata determinado, carismático e sonhador. Luffy ganha poderes elásticos após comer a "Gomu Gomu no Mi". Ele lidera a tripulação dos Chapéus de Palha, que viaja pelos mares em busca do lendário tesouro conhecido como "One Piece".',
    'roronoa-zoro': 'Zoro é  é conhecido por sua personalidade séria e sua busca para se tornar o maior espadachim do mundo. Zoro empunha três espadas em uma técnica de luta chamada "Santoryu".',
    'nami': 'Nami é a navegadora dos Chapéus de Palha. Inicialmente, Nami era uma ladra e os Chapéus de Palha a salvaram de sua situação. Eventualmente, ela se junta à tripulação e se torna uma das aliadas mais confiáveis de Luffy.',
    'usopp': 'Usopp é o franco-atirador dos Chapéus de Palha, habilidoso com suas proezas de atirar projéteis e também um talentoso contador de histórias. Ele é um sonhador e muitas vezes exagera suas histórias para se sentir mais confiante. Ao longo da jornada, ele amadurece e se torna um membro valioso da tripulação.',
    'sanji': 'Sanji é o cozinheiro dos Chapéus de Palha, conhecido por sua luta usando técnicas de artes marciais com os pés, chamada "Estilo Perna Negra". Sanji sonha em encontrar o All Blue, uma lenda marinha que reúne todos os tipos de peixes em um só lugar.',
    'chopper': 'Chopper é uma rena que comeu a "Hito Hito no Mi", uma Fruta do Diabo que lhe deu a habilidade de se transformar em uma forma humana. Ele é um médico talentoso e o médico oficial dos Chapéus de Palha. Chopper é extremamente sensível e, apesar de ser um animal, é aceito como membro da tripulação.',
    'nico-robin': 'Nico Robin é uma arqueóloga talentosa e a sétima integrante dos Chapéus de Palha. Ela possui poderes da "Hana Hana no Mi", permitindo-lhe criar e controlar braços em qualquer superfície, tornando-se extremamente útil em combate e exploração.',
    'franky': 'Franky é um habilidoso construtor naval, conhecido por sua paixão por sua aparência "robótica" e por seu corpo repleto de tecnologia avançada. Ele também é um poderoso lutador e se junta aos Chapéus de Palha durante a saga da Water Seven. Franky tem um grande coração e ajuda a tripulação em suas aventuras.',
    'brook': 'Brook é um esqueleto vivo, após comer a "Yomi Yomi no Mi", que o trouxe de volta à vida. Ele é o músico e espadachim dos Chapéus de Palha, além de ser capaz de se mover como um esqueleto graças ao poder de sua fruta. Brook é extremamente alegre, carismático e tem uma inclinação para tocar música e fazer piadas sobre sua condição de esqueleto.',
  };  
personangens.forEach(personagem => {
    personagem.addEventListener("mouseenter", ()=>{
        if(window.innerWidth<450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerPersonagemSelecionado();
        personagem.classList.add("selecionado");

        let idSelecionado = personagem.attributes.id.value;

        alterarImagemGrande(idSelecionado);
        alterarNomePersonagem(idSelecionado);
        alterarDescricaoPersonagem(idSelecionado);
    })
})

function alterarDescricaoPersonagem(idSelecionado) {
    const descricaoPersonangem = document.querySelector(".descricao-personagem");
    descricaoPersonangem.innerText = descricaoPersonangens[idSelecionado];
}

function alterarNomePersonagem(idSelecionado) {
    const nomePersonagem = document.querySelector(".nome-personagem");
    nomePersonagem.innerText = idSelecionado.replace("-", " ");
}

function alterarImagemGrande(idSelecionado) {
    const personagemGrande = document.querySelector(".personagem-grande");
    personagemGrande.src = `./imagens/${idSelecionado}.png`;
}

function removerPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
