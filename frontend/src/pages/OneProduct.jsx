function OneProduct() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center">
          <img
            alt="pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            className="img-fluid"
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center importantText">Bulbasaur</h1>
            <p className="fw-bold text-center importantText">ID: 001</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold">price: 5.99$</p>
            <button type="button" className="btn btn-warning">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h2 className="text-center importantText">Type</h2>
          <ul className=" list-group list-group-horizontal">
            <li className="list-group-item text-center w-50 bg-success text-white">
              primary: grass
            </li>
            <li className="list-group-item text-center w-50 bg-warning">
              secondary: poison
            </li>
          </ul>
        </div>
        <div className="mt-4 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h2 className="text-center importantText">Abilities</h2>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item text-center w-50">overgrow</li>
            <li className="list-group-item text-center w-50">chlorophyll</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center importantText">Stats</h2>
        <div className="row mt-4">
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">49</p>
            </div>
            <h5 className="text-center">attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">49</p>
            </div>
            <h5 className="text-center">defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">65</p>
            </div>
            <h5 className="text-center">special attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">65</p>
            </div>
            <h5 className="text-center">special defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p>
            </div>
            <h5 className="text-center">speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p>
            </div>
            <h5 className="text-center">Life</h5>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center importantText mt-4">Reviews</h2>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center">Lorem ipsum</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              optio exercitationem laudantium obcaecati, eum saepe distinctio
              minus modi ullam tenetur nobis inventore ipsam, consequuntur error
              itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center">Lorem ipsum</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum optio exercitationem laudantium obcaecati, eum saepe
              distinctio minus modi ullam tenetur nobis inventore ipsam,
              consequuntur error itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <p className="fw-bold text-center">Lorem ipsum</p>
            <p>
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
