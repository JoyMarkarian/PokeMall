import Home from "@pages/Home";
import pokemons from "@services/pokemons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home pokemons={pokemons} />
    </div>
  );
}

export default App;
