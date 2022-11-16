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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState({ path: "Home", index: null });

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Header setPage={setPage} search={search} handleSearch={handleSearch} />
      {page.path === "Home" && <Home pokemons={pokemons} />}
      {page.path === "Products" && <AllProducts search={search} />}
      {page.path === "Basket" && <Basket />}
      {page.path === "one Product" && (
        <OneProduct pokemon={pokemons[page.index - 1]} setPage={setPage} />
      )}
      {page.path === "Contact" && <Footer />}
    </div>
  );
}

export default App;
