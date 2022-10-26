function Basket() {
  return (
    <div>
      <h1 className="text-center">Basket</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="pokemon"
      />
      <h2>Carapuce </h2>
      <p>
        Quantité : <button type="button">-1+</button>
      </p>
      <h2>Prix</h2>
      <p>5,99€</p>
      <button type="button">Supprimer</button>
    </div>
  );
}

export default Basket;
