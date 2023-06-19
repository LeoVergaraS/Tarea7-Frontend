// Entrada: No tiene
// Salida: Json, retorna los primeros 20 pokemones
// Descripción: Función que hace un GET de la API de pokemonapi
//              de los 20 primeros pokemones
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

// Entrada: String, Url de donde se realizara la consulta
// Salida: Json, retorna los datos de un pokemon
// Descripción: Función que hace un GET de la API de pokemonapi
//              de un pokemon en especifico
const getPokemon = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){
        console.error(error)
    }
};

// Entrada: String, palabra a convertir
// Salida: String, palabra con la primera letra en mayuscula
// Descripción: Función que convierte la primera letra de una
//              palabra en mayuscula
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

// Entrada: No tiene
// Salida: No tiene
// Descripción: Función que crea las cards de los pokemones
const PokemonHTML = async () => {
    let pok = document.getElementById('pokemones');
    const content = pok.innerHTML;
    const pokemones = await getPokemones();
    pokemones.forEach(async (pkmn) => {
        const data = await getPokemon(pkmn.url);
        pok.innerHTML += cardHTML(data);
    });
};

PokemonHTML();



