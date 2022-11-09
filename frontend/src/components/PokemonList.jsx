import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

import "../PokemonList.css";

function PokemonList({ search }) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [sorting, setSorting] = useState("default");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemons`)
      .then((res) => res.json())
      .then((data) => setPokemonsList(data))
      .catch((err) => console.error(err));
  }, []);

  function getPokemons() {
    let orderPokemons = [];
    if (sorting === "default")
      orderPokemons = pokemonsList.sort(
        (a, b) => a.pokedex_index - b.pokedex_index
      );
    if (sorting === "ascending") {
      orderPokemons = pokemonsList.sort((a, b) => a.price - b.price);
    }
    if (sorting === "decreasing") {
      orderPokemons = pokemonsList.sort((a, b) => b.price - a.price);
    }
    return orderPokemons
      .filter((pokemon) => pokemon.name.startsWith(search) || search === "")
      .map((pokemon) => {
        return <PokemonCard key={pokemon.pokedex_index} pokemon={pokemon} />;
      });
  }
  return (
    <div className="all-products">
      <div>
        <h1 className="all-products-title text-center">All Products</h1>
      </div>
      <div className="form-global">
        <div className="form-floating sort-by">
          <select
            className="form-select select-sort"
            id="floatingSelect"
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="default">Pokedex index</option>
            <option value="ascending">Ascending price</option>
            <option value="decreasing">Decreasing price</option>
          </select>
          <label htmlFor="floatingSelect">Sort by</label>
        </div>
      </div>
      <div className="row justify-content-center row-col-2 row-col-md-4">
        {getPokemons()}
      </div>
    </div>
  );
}

export default PokemonList;
