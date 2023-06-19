const getPokemones = async () => {
    try{
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    }catch(error){
        console.error(error)
    }
};

const getPokemon = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){
        console.error(error)
    }
};

const mayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const cardHTML = (pokemon) => {
    return (`<div class="card" style="width: 18rem;">
                <img src="${pokemon.sprites.other.dream_world.front_default}" class="img card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h4 class="card-title text-center">${mayuscula(pokemon.name)}</h5>
                </div>
            </div>`)
};

let pok = document.getElementById('pokemones');
const content = pok.innerHTML;
const PokemonHTML = async () => {
    const pokemones = await getPokemones();
    pokemones.forEach(async (pkmn) => {
        const data = await getPokemon(pkmn.url);
        pok.innerHTML += cardHTML(data);
    });
};

PokemonHTML();



