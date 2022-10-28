import "../Basket.css";

function Basket() {
  return (
    <div className="container">
      <h1 className="text-center">Panier</h1>
      <div className="row">
        <div className="col-6 my-3">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            className="float-start img-fluid"
            alt="pokemon"
          />
        </div>
        <div className="col-6 my-3">
          <h2>Bulbizar</h2>
          <div className="form-floating w-75 d-inline-block justify-content-center">
            <select className="form-select" id="floatingSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <label htmlFor="floatingSelect">
              <b>Quantité</b>
            </label>
          </div>
          <h3 className="my-3">Prix : 5,99€</h3>
          <button type="button" className="btn btn-success btn-lg m-0">
            Supprimer
          </button>
        </div>
      </div>
      <div className="container card">
        <br />
        <h1 className="text-center">Récapitulatif de la commande</h1>
        <div className="d-flex mb-3 p-2 w-100 justify-content-between">
          <h3>Total articles</h3>
          <h4>5.99$</h4>
        </div>
        <div className="d-flex mb-3 p-2 w-100 justify-content-between">
          <p>Dont TVA</p>
          <p>0.99$</p>
        </div>
        <div className="d-flex mb-3 p-2 w-100 justify-content-between">
          <h3>Frais de livraison</h3>
          <h4>GRATUIT</h4>
        </div>
      </div>
      <div className="card my-2">
        <h1 className="m-3">Livraison</h1>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label float-start"
            htmlFor="flexRadioDefault1"
          >
            Livraison à domicile par la Team Rocket
          </label>
        </div>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label float-start"
            htmlFor="flexRadioDefault1"
          >
            Livraison à domicile par le professeur Chen
          </label>
        </div>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label float-start"
            htmlFor="flexRadioDefault1"
          >
            Livraison à domicile par Sacha
          </label>
        </div>
      </div>
      <div className="card m-3">
        <button type="button" className="btn btn-success btn-lg">
          Valider ma commande
        </button>
      </div>
    </div>
  );
}

export default Basket;
