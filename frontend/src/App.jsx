import AllProducts from "@pages/AllProducts";
import Basket from "@pages/Basket";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";
import pokemons from "@services/pokemons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home pokemons={pokemons} />
      <AllProducts />
      <OneProduct />
      <Basket />
    </div>
  );
}

export default App;
