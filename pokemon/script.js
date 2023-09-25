const pokemonDataElement = document.getElementById("pokemon-data");

const colors = {
    'fire': '#FF8C00',
    'water': '#6B88FF',
    'grass': '#00FF7F',
    'electric': '#FFD700',
    'ice': '#AEEEEE',
    'fighting': '#D35400',
    'psychic': '#FF9FF3',
    'ghost': '#6D5E7E',
    'dragon': '#8A2BE2',
    'steel': '#808080',
    'poison': '#9932CC',
    'ground': '#DAA520',
    'flying': '#B0E0E6',
    'bug': '#77DD77',
    'normal': '#C0C0C0',
    'rock': '#B87333',
    'dark': '#3A3A3A',
    'fairy': '#FFB6C1',
};


async function getPokemonData(pokemonId) {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();

        const pokemonName = data.name;
        const pokemonImage = data.sprites.front_default;
        const types = data.types.map(type => type.type.name).join(', ');

        const pokemonElement = document.createElement('div');
        pokemonElement.setAttribute('class', 'pokemon');
        pokemonElement.innerHTML = `
            <h2>${pokemonName}</h2>
            <img src="${pokemonImage}" alt="${pokemonName}"/>
        `;

        if (types.indexOf(", ") !== -1) {
            let colorType = types.split(", ");
            pokemonElement.style.background = `linear-gradient(90deg, ${colors[colorType[0]]}, ${colors[colorType[1]]})`;
        } else {
            pokemonElement.style.background = colors[types];
        }

        return pokemonElement;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function loadPokemonData(first, last) {
    const pokemonElements = [];

    for (let i = first; i <= last; i++) {
        const pokemonElement = await getPokemonData(i);
        if (pokemonElement) {
            pokemonElements.push(pokemonElement);
        }
    }

    // Adicione os Pokémon à página na ordem correta
    for (const element of pokemonElements) {
        pokemonDataElement.appendChild(element);
    }
}
const kantoButton = document.querySelector("#kanto");
const johtoButton = document.querySelector("#johto");
const hoennButton = document.querySelector("#hoenn");
const sinnohButton = document.querySelector("#sinnoh");
const unovaButton = document.querySelector("#unova");
const kalosButton = document.querySelector("#kalos");
const alolaButton = document.querySelector("#alola");
const galarButton = document.querySelector("#galar");
const paldeaButton = document.querySelector("#paldea");

kantoButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(1, 151);
});
johtoButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(152, 251);
});
hoennButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(252, 386);
});
sinnohButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(387, 493);
});
unovaButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(494, 649);
});
kalosButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(650, 721);
});
alolaButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(722, 809);
});
galarButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(810, 898);
});
paldeaButton.addEventListener("click", function(){
    pokemonDataElement.innerHTML = '';
    loadPokemonData(906, 1017);
});