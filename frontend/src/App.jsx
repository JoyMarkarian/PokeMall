import React, { useState } from "react";

import AllProducts from "@pages/AllProducts";
import Basket from "@pages/Basket";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";

import Footer from "./components/Footer";
import Header from "./components/Header";

import pokemons from "./services/pokemons";

import "./App.css";

function App() {
  const [page, setPage] = useState({ path: "one Product", index: 1 });
  const [id, setId] = React.useState(0);

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page.path === "Home" && <Home pokemons={pokemons} />}
      {page.path === "Products" && <AllProducts />}
      {page.path === "Basket" && <Basket />}
      {page.path === "one Product" && (
        <OneProduct
          index={pokemons[page.index].pokedex_index}
          name={pokemons[page.index].name}
          image={pokemons[page.index].url}
          life={pokemons[page.index].hp}
          attack={pokemons[page.index].stats.attack}
          defense={pokemons[page.index].stats.defense}
          specialAttack={pokemons[page.index].stats.special_attack}
          specialDefense={pokemons[page.index].stats.special_defence}
          speed={pokemons[page.index].stats.speed}
          primaryType={pokemons[page.index].type.primary_type}
          secondaryType={pokemons[page.index].type.secondary_type}
          price={pokemons[page.index].price}
          firstAbility={pokemons[page.index].ability.first_ability}
          secondAbility={pokemons[page.index].ability.seconde_ability}
          id={id}
          setId={setId}
        />
      )}
      {page.path === "Contact" && <Footer />}
    </div>
  );
}

export default App;
