import AllProducts from "./pages/AllProducts";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";

import Footer from "./components/Footer";
import Header from "./components/Header";

import pokemons from "./services/pokemons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home pokemons={pokemons} />
      <AllProducts />
      <OneProduct />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
