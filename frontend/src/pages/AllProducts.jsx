import PokemonList from "../components/PokemonList";

function AllProducts({ search }) {
  return (
    <div>
      <PokemonList search={search} />
    </div>
  );
}

export default AllProducts;
