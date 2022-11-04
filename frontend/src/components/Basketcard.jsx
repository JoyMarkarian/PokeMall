function Basketcard() {
  return (
    <div className="product row border-bottom">
      <div className="img-basket col-6 my-5">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          className="img float-start img-fluid"
          alt="pokemon"
        />
      </div>
      <div className="basket-top col-6">
        <h2 className="my-5">Bulbizar</h2>
        <div className="product-basket w-30 d-inline-block justify-content-center md">
          <label htmlFor="floatingSelect">Quantity</label>
          <select className="quantity form-select" id="quantitySelect">
            <option value="1">
              <b>1</b>
            </option>
            <option value="2">
              <b>2</b>
            </option>
            <option value="3">
              <b>3</b>
            </option>
            <option value="4">
              <b>4</b>
            </option>
            <option value="5">
              <b>5</b>
            </option>
            <option value="6">
              <b>6</b>
            </option>
            <option value="7">
              <b>7</b>
            </option>
            <option value="8">
              <b>8</b>
            </option>
            <option value="9">
              <b>9</b>
            </option>
            <option value="10">
              <b>10</b>
            </option>
          </select>
        </div>
        <button type="button" className="btn-delete btn btn-link my-2">
          Delete
        </button>
        <h3 className="my-3">Price : 10$</h3>
      </div>
    </div>
  );
}
export default Basketcard;
