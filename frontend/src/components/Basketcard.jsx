import React, { useState } from "react";

function Basketcard({ handleDeletPanier, pokemon }) {
  const { url, name, price } = pokemon;
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product row border-bottom">
      <div className="img-basket col-6 my-5">
        <img src={url} className="img float-start img-fluid" alt="pokemon" />
      </div>
      <div className="basket-top col-6">
        <h2 className="my-5">{name}</h2>
        <div className="product-basket w-30 d-inline-block justify-content-center md">
          <label htmlFor="floatingSelect">Quantity</label>
          <select
            onChange={(e) => setQuantity(e.target.value)}
            className="quantity form-select"
            id="quantitySelect"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button
          type="button"
          className="btn-delete btn btn-link my-2"
          onClick={() => handleDeletPanier(pokemon)}
        >
          Delete
        </button>
        <h3 className="my-3">Price : {price}$</h3>
        <h4 className="my-3">Total price : {quantity * price}$</h4>
      </div>
    </div>
  );
}
export default Basketcard;
