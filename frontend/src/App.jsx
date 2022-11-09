import React, { useState } from "react";

import AllProducts from "@pages/AllProducts";
import Basket from "@pages/Basket";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";

import Form from "@components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";

import pokemons from "./services/pokemons";

import "./App.css";

function App() {
  const [page, setPage] = useState({ path: "Home", index: null });
  const [id, setId] = React.useState(0);

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page.path === "Home" ? <Home pokemons={pokemons} /> : ""}
      {page.path === "Products" ? <AllProducts /> : ""}
      {page.path === "Basket" ? <Basket /> : ""}
      <OneProduct
        index={pokemons[id].pokedex_index}
        name={pokemons[id].name}
        image={pokemons[id].url}
        life={pokemons[id].hp}
        attack={pokemons[id].stats.attack}
        defense={pokemons[id].stats.defense}
        specialAttack={pokemons[id].stats.special_attack}
        specialDefense={pokemons[id].stats.special_defence}
        speed={pokemons[id].stats.speed}
        primaryType={pokemons[id].type.primary_type}
        secondaryType={pokemons[id].type.secondary_type}
        price={pokemons[id].price}
        firstAbility={pokemons[id].ability.first_ability}
        secondAbility={pokemons[id].ability.seconde_ability}
        id={id}
        setId={setId}
      />
      <Form />
      {page.path === "Contact" ? <Footer /> : ""}
    </div>
  );
}

export default App;
