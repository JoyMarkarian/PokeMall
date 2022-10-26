import PokemonCard from "./PokemonCard";
import pokemons from "../services/pokemons";

import "../PokemonList.css";

function PokemonList() {
  return (
    <div>
      <div>
        <h1>All Products</h1>
      </div>
      <h2>Filter by type</h2>
      <div>
        <div>
          <input type="checkbox" name="typeWater" value="water" id="water" />
          <label htmlFor="starting">Water</label>
        </div>
        <div>
          <input type="checkbox" name="typeFire" value="fire" id="fire" />
          <label htmlFor="reserves">Fire</label>
        </div>
      </div>
      <div className="form-floating">
        <select className="form-select" id="floatingSelect">
          <option selected>Pokedex index</option>
          <option value="ascending">Ascending price</option>
          <option value="decreasing">Decreasing price</option>
        </select>
        <label htmlFor="floatingSelect">Sort by</label>
      </div>
      <div className="d-flex flex-wrap">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.pokedex_index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
