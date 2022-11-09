import "../PokemonList.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="card card-pokemon">
      <div className="card-body">
        <img
          className="img-fluid, card-img-top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokedex_index}.svg`}
          alt={pokemon.name}
        />
      </div>
      <h2 className="card-title text-capitalize text-center">{pokemon.name}</h2>
      <p className="card-index text-center">
        Pokedex index : {pokemon.pokedex_index}
      </p>
      <h3 className="card-price text-center">Price : {pokemon.price}$</h3>
      <button type="button" className="btn btn-card btn-success">
        Show product
      </button>
    </div>
  );
}

export default PokemonCard;
