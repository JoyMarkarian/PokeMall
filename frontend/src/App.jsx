import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const [panier, setPanier] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handlePanier = (addCard) => {
    const newPanier = panier;
    newPanier.push(addCard);
    setPanier(newPanier);
  };
  const handleDeletPanier = (toDelete) => {
    const newPanier = panier.filter((pokemon) => pokemon.id !== toDelete.id);
    setPanier(newPanier);
  };
  return (
    <Router>
      <Header search={search} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} />} />
        <Route path="/products" element={<AllProducts search={search} />} />
        <Route
          path="/cart"
          element={
            <Basket panier={panier} handleDeletPanier={handleDeletPanier} />
          }
        />
        <Route
          path="/products/:id"
          element={<OneProduct handlePanier={handlePanier} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
