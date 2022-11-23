import { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

import "../PokemonList.css";

function PokemonList({ search }) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [sorting, setSorting] = useState("default");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemons`)
      .then((res) => res.json())
      .then((data) => setPokemonsList(data))
      .catch((err) => console.error(err));
  }, []);

  function getPokemons() {
    let orderPokemons = [];
    if (sorting === "default")
      orderPokemons = pokemonsList.sort((a, b) => a.index - b.index);
    if (sorting === "ascending") {
      orderPokemons = pokemonsList.sort((a, b) => a.price - b.price);
    }
    if (sorting === "decreasing") {
      orderPokemons = pokemonsList.sort((a, b) => b.price - a.price);
    }
    return orderPokemons
      .filter(
        (pokemon) =>
          (pokemon.name.startsWith(search) || search === "") &&
          (pokemon.primaryType === filter ||
            pokemon.secondaryType === filter ||
            filter === "")
      )
      .map((pokemon) => {
        return <PokemonCard key={pokemon.index} pokemon={pokemon} />;
      });
  }
  return (
    <div className="all-products">
      <div>
        <h1 className="all-products-title text-center">ALL PRODUCTS</h1>
      </div>
      <div className="d-flex">
        <div className="form-global sort-by">
          <div className="form-floating">
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
        <div className="form-global filter-by">
          <div className="form-floating">
            <select
              className="form-select filter-sort"
              id="floatingFilter"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Type</option>
              <option value="bug">Bug</option>
              <option value="electric">Electric</option>
              <option value="fairy">Fairy</option>
              <option value="fire">Fire</option>
              <option value="flying">Flying</option>
              <option value="grass">Grass</option>
              <option value="ground">Ground</option>
              <option value="normal">Normal</option>
              <option value="poison">Poison</option>
              <option value="water">Water</option>
            </select>
            <label htmlFor="floatingFilter">Filter by</label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center row-col-2 row-col-md-4">
        {getPokemons()}
      </div>
    </div>
  );
}

export default PokemonList;
