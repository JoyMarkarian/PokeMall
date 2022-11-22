import editMeta from "@services/seo";

import PokemonList from "../components/PokemonList";

function AllProducts({ search }) {
  editMeta("All Products", "Find the catalog of our Pokemon products");
  return (
    <div>
      <PokemonList search={search} />
    </div>
  );
}

export default AllProducts;
