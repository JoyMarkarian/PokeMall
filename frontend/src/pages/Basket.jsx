import { useState } from "react";

function Basket() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container card">
      <h1 className="text-center">Panier</h1>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          className="float-center img-fluid"
          alt="pokemon"
        />
      </div>
      <div>
        <h2>Pikachu</h2>
        <p>
          Quantité :{" "}
          <button
            type="button"
            className="btn-sm"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>{" "}
          <b>{counter}</b>{" "}
          <button
            type="button"
            className="btn-sm"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </p>
        <h3>Prix :</h3>
        <p>5,99€</p>
      </div>
      <button type="button" className="btn btn-success btn-lg">
        Supprimer
      </button>
      <div className="container card">
        <br />
        <h1 className="text-center">Récapitulatif de la commande</h1>
        <div className="d-flex mb-3 p-2 w-100 justify-content-between">
          <h3>Total articles</h3>
          <h4>5.99€</h4>
        </div>
        <div className="d-flex mb-3 p-2 w-100 justify-content-between">
          <h3>Frais de livraison</h3>
          <h4>GRATUIT</h4>
        </div>
      </div>
      <div className="card">
        <button type="button" className="btn btn-success btn-lg">
          Valider ma commande
        </button>
      </div>
    </div>
  );
}

export default Basket;
