import AllProducts from "@pages/AllProducts";
import Basket from "@pages/Basket";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";

import Footer from "@components/Footer";
import Header from "@components/Header";

import pokemons from "@services/pokemons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home pokemons={pokemons} />
      <AllProducts />
      <OneProduct
        index={pokemons[0].pokedex_index}
        name={pokemons[0].name}
        image={pokemons[0].url}
        life={pokemons[0].hp}
        attack={pokemons[0].stats.attack}
        defense={pokemons[0].stats.defense}
        specialAttack={pokemons[0].stats.special_attack}
        specialDefense={pokemons[0].stats.special_defence}
        speed={pokemons[0].stats.speed}
        primaryType={pokemons[0].type.primary_type}
        secondaryType={pokemons[0].type.secondary_type}
        price={pokemons[0].price}
        firstAbility={pokemons[0].ability.first_ability}
        secondAbility={pokemons[0].ability.seconde_ability}
      />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
