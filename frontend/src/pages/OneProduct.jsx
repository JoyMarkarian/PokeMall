function OneProduct() {
  return (
    <div className="container divPrincipale">
      <div className="row pt-5">
        <div className="col-6 text-center">
          <img
            alt="pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            className="img-fluid pulse"
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center importantText">Bulbasaur</h1>
            <p className="fw-bold text-center importantText">ID: 001</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold textRegular">price: 5.99$</p>
            <button
              type="button"
              className="btn btn-warning shadow textRegular"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <h2 className="text-center importantText">Type</h2>
          <ul className=" list-group list-group-horizontal justify-content-center">
            <li className="list-group-item text-center w-25 bg-success text-white me-1 textRegular">
              Grass
            </li>
            <li className="list-group-item text-center w-25 bg-warning ms-1 textRegular">
              Poison
            </li>
          </ul>
        </div>
        <div className="mt-4 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h2 className="text-center importantText">Abilities</h2>
          <ul className="list-group list-group-horizontal justify-content-center">
            <li className="list-group-item w-25 p-0 text-center pt-2 pb-2 bg-success text-white me-1 textRegular">
              Overgrow
            </li>
            <li className="list-group-item w-25 p-0 text-center pt-2 pb-2 bg-success text-white ms-1 textRegular">
              Chlorophyll
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center importantText">Stats</h2>
        <div className="row mt-4">
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">49</p>
            </div>
            <h5 className="text-center textRegular">Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">49</p>
            </div>
            <h5 className="text-center textRegular">Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">65</p>
            </div>
            <h5 className="text-center textRegular">Special Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">65</p>
            </div>
            <h5 className="text-center textRegular">Special Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">45</p>
            </div>
            <h5 className="text-center textRegular">Speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">45</p>
            </div>
            <h5 className="text-center textRegular">Life</h5>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center importantText mt-4">Reviews</h2>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              optio exercitationem laudantium obcaecati, eum saepe distinctio
              minus modi ullam tenetur nobis inventore ipsam, consequuntur error
              itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum optio exercitationem laudantium obcaecati, eum saepe
              distinctio minus modi ullam tenetur nobis inventore ipsam,
              consequuntur error itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum optio exercitationem laudantium obcaecati, eum saepe
              distinctio minus modi ullam tenetur nobis inventore ipsam,
              consequuntur error itaque at hic dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
