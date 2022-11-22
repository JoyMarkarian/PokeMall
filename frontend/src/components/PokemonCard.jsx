import { HashLink } from "react-router-hash-link";

import "../PokemonList.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="card card-pokemon">
      <div className="card-body">
        <img
          className="img-fluid, card-img-top"
          src={pokemon.url}
          alt={pokemon.name}
        />
      </div>
      <h2 className="card-title text-capitalize text-center">{pokemon.name}</h2>
      <p className="card-index text-center">Pokedex index : {pokemon.index}</p>
      <h3 className="card-price text-center">Price : {pokemon.price}$</h3>
      <HashLink
        to={`/products/${pokemon.index}#`}
        className="btn btn-card btn-success"
      >
        Show product
      </HashLink>
    </div>
  );
}

export default PokemonCard;
