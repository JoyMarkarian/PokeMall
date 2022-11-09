import React from "react";
import PokemonCard from "./PokemonCard";
import pokemons from "../services/pokemons";

import "../PokemonList.css";

function PokemonList() {
  const [sorting, setSorting] = React.useState("default");
  const getPokemons = () => {
    let orderPokemons = [];
    if (sorting === "default")
      orderPokemons = pokemons.sort(
        (a, b) => a.pokedex_index - b.pokedex_index
      );
    if (sorting === "ascending") {
      orderPokemons = pokemons.sort((a, b) => a.price - b.price);
    }
    if (sorting === "decreasing") {
      orderPokemons = pokemons.sort((a, b) => b.price - a.price);
    }
    return orderPokemons.map((pokemon) => {
      return <PokemonCard key={pokemon.pokedex_index} pokemon={pokemon} />;
    });
  };
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
