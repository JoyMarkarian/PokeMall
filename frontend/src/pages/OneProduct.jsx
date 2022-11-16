import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import PokemonStat from "@components/PokemonStat";
import Avis from "@components/Avis";

import img from "../assets/previous.png";
import img2 from "../assets/next.png";

function OneProduct() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemons/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  }, [id]);
  const {
    url,
    name,
    pokedex_index: index,
    price,
    type,
    ability,
    stats,
    hp,
  } = pokemon;
  function letter(word) {
    const result =
      `${word}`.charAt(0).toUpperCase() + `${word}`.slice(1).toLowerCase();
    return result;
  }
  return (
    <div className="container-fluid divPrincipale">
      <div className="d-flex justify-content-around">
        {index === 1 ? (
          <p />
        ) : (
          <Link
            to={`/products/${pokemon.pokedex_index - 1}`}
            className="btn btn-sm"
          >
            <img
              className="oneProductBtn  d-md-none d-lg-none d-xl-none d-xxl-none"
              alt="bouton previous"
              src={img}
            />
          </Link>
        )}
        {index === 51 ? (
          <p />
        ) : (
          <Link
            to={`/products/${pokemon.pokedex_index + 1}`}
            className="btn btn-sm"
          >
            <img
              className="oneProductBtn d-md-none d-lg-none d-xl-none d-xxl-none"
              alt="bouton next"
              src={img2}
            />
          </Link>
        )}
      </div>
      <div className="row pt-4">
        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 d-flex align-items-center">
          {index > 1 && (
            <Link
              to={`/products/${pokemon.pokedex_index - 1}`}
              className="btn d-none d-md-block d-lg-block d-xl-block"
            >
              <img
                className="oneProductBtn d-md-lg-xl-none"
                alt="bouton previous"
                src={img}
              />
            </Link>
          )}
        </div>
        <div className="col-6 col-sm-6 col-md-5 col-lg-5 text-center d-flex flex-column justify-content-center">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center importantText">{letter(name)}</h1>
            <p className="fw-bold text-center importantText">ID : {index}</p>
          </div>
          <img
            alt="pokemon"
            src={url}
            className="imageOneProduct align-self-center mb-3"
          />
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold fs-5 m-0 textRegular">Price : {price}$</p>
            <button
              type="button"
              className="btn btn-warning shadow textRegular mt-1"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-5 col-lg-5 d-flex flex-column justify-content-around">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            {type && type.secondary_type ? (
              <h2 className="text-center importantText">Types</h2>
            ) : (
              <h2 className="text-center importantText">Type</h2>
            )}
            <ul className=" list-group list-group-horizontal-sm justify-content-center align-items-center">
              <li
                className={`list-group-item text-center mb-1 me-1 rounded textRegular typeAbilities text-white ${
                  type && type.primary_type
                }`}
              >
                {letter(type && type.primary_type)}
              </li>
              {type && type.secondary_type && (
                <li
                  className={`list-group-item text-center mb-1 me-1 textRegular rounded typeAbilities text-white ${
                    type && type.secondary_type
                  }`}
                >
                  {letter(type && type.secondary_type)}
                </li>
              )}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {ability && ability.seconde_ability ? (
              <h2 className="text-center importantText">Abilities</h2>
            ) : (
              <h2 className="text-center importantText">Ability</h2>
            )}
            <ul className="list-group list-group-horizontal-sm justify-content-center align-items-center">
              <li
                className={`list-group-item p-0 mb-1 me-1 text-center pt-2 pb-2 rounded textRegular typeAbilities text-white ${
                  type && type.primary_type
                }`}
              >
                {letter(ability && ability.first_ability)}
              </li>
              {ability && ability.seconde_ability && (
                <li
                  className={`list-group-item p-0  mb-1 me-1 text-center pt-2 pb-2 rounded textRegular typeAbilities text-white ${
                    type && type.primary_type
                  }`}
                >
                  {letter(ability && ability.seconde_ability)}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 d-flex align-items-center">
          {index < 51 && (
            <Link
              to={`/products/${pokemon.pokedex_index + 1}`}
              className="btn d-none d-md-block d-lg-block d-xl-block"
            >
              <img className="oneProductBtn" alt="bouton next" src={img2} />
            </Link>
          )}
        </div>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center importantText">Stats</h2>
        <div className="row mt-4">
          <PokemonStat
            type={type && type.primary_type}
            stat={stats && stats.attack}
            text="Attack"
          />
          <PokemonStat
            type={type && type.primary_type}
            stat={stats && stats.defense}
            text="Defense"
          />
          <PokemonStat
            type={type && type.primary_type}
            stat={stats && stats.special_attack}
            text="Special Attack"
          />
          <PokemonStat
            type={type && type.primary_type}
            stat={stats && stats.special_defence}
            text="Special Defense"
          />
          <PokemonStat
            type={type && type.primary_type}
            stat={stats && stats.speed}
            text="Speed"
          />
          <PokemonStat type={type && type.primary_type} stat={hp} text="Life" />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center importantText mt-4">Reviews</h2>
        <div className="row mt-4">
          <Avis />
          <Avis />
          <Avis />
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
