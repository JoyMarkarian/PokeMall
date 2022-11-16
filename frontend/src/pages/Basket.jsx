import { useState } from "react";

import Basketcard from "@components/Basketcard";

import "../Basket.css";

function Basket() {
  const panier = [1, 2];
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
            {panier.map((el) => (
              <Basketcard key={el} />
            ))}
          </div>
          <div className="card-summary col-md-4 card md-w-50">
            <div className="summary-order container">
              <br />
              <h1 className="text-center">Summary of orders</h1>
              <div className="price-product d-flex mb-3 p-2 w-100 justify-content-between my-3">
                <h3>Total items</h3>
                <h4>10$</h4>
              </div>
              <div className="price-tva d-flex mb-3 p-2 w-100 justify-content-between">
                <p>Including TVA</p>
                <p>0.99$</p>
              </div>
              <div className="delivery d-flex mb-3 p-2 w-100 justify-content-between">
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
