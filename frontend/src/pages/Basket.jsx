import { useState } from "react";
import "../Basket.css";

function Basket() {
  const [deliveryOption, setDeliveryOption] = useState("1");
  const handleChange = (e) => {
    setDeliveryOption(e.target.value);
  };
  return (
    <div className="body-basket md">
      <div className="container md">
        <h1 className="text-center">Basket</h1>
        <div className="basket-dekstop row">
          <div className="col-md-8 md-w-75">
            <div className="product row">
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
          </div>
          <div className="card-summary col-md-4 card md-w-50">
            <div className="summary-order container">
              <br />
              <h1 className="text-center">Summary of orders</h1>
              <div className="d-flex mb-3 p-2 w-100 justify-content-between my-3">
                <h3>Total items</h3>
                <h4>10$</h4>
              </div>
              <div className="d-flex mb-3 p-2 w-100 justify-content-between">
                <p>Including TVA</p>
                <p>0.99$</p>
              </div>
              <div className="d-flex mb-3 p-2 w-100 justify-content-between">
                <h3>Delivery cost</h3>
                <h4>FREE</h4>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="valide-basket btn btn-success btn-lg mb-2"
                >
                  Validate my order
                </button>
              </div>
            </div>

            <div className="my-2">
              <h1 className="m-3 d-flex justify-content-center">Delivery</h1>
              <div className="delivery-basket form-check m-2">
                <input
                  className="form-check-input shadow-none"
                  type="radio"
                  value="1"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={deliveryOption === "1"}
                  onChange={(e) => handleChange(e)}
                />
                <label
                  className="form-check-label float-start"
                  htmlFor="flexRadioDefault1"
                >
                  Home delivery by Team Rocket
                </label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input shadow-none"
                  type="radio"
                  value="2"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={deliveryOption === "2"}
                  onChange={(e) => handleChange(e)}
                />
                <label
                  className="form-check-label float-start"
                  htmlFor="flexRadioDefault1"
                >
                  Home delivery by Teacher Chen
                </label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input shadow-none"
                  type="radio"
                  value="3"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={deliveryOption === "3"}
                  onChange={(e) => handleChange(e)}
                />
                <label
                  className="form-check-label float-start"
                  htmlFor="flexRadioDefault1"
                >
                  Home delivery by Sacha
                </label>
              </div>
            </div>
            <div className="valide-basket-mobile card m-3">
              <button type="button" className="btn btn-success btn-lg">
                Validate my order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
