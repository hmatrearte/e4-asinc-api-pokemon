async function buscarPokemon() {
    const numero = document.getElementById('buscaPokemon').value;

    if (numero !== '') {
    const numeroPokemon = parseInt(numero);
    if (numeroPokemon > 0 && numeroPokemon <= 898) { 
        try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
        const data = await response.json();
        mostrarPokemon(data);
        } 
        catch (error) {
        console.error('Error al buscar el Pokemon:', error);
        }
        } else {
        console.error(alert('No existe bro, ingresa otro número de Pokemon'));
    }
} 
}  

function mostrarPokemon(pokemon) {
    const pokemonCard = document.getElementById('pokemonCard');
    const tipos = pokemon.types.map(type => type.type.name).join(', ');
    pokemonCard.innerHTML = `
    <div class="card">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>Tipos: ${tipos}</p>
        <p>N.º: ${pokemon.id}</p>
        <p>Altura: ${pokemon.height/10}</p>
        <p>Peso: ${pokemon.weight/10}</p>
    </div>
    `;
}
