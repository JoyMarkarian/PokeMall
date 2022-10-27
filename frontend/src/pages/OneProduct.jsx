function OneProduct() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            alt="pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center">Bulbizarre</h1>
            <p className="fw-bold text-center">ID: 001</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold">price: 5.99$</p>
            <button type="button" className="btn btn-warning">
              ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Type</h2>
        <ul className=" list-group list-group-horizontal">
          <li className="list-group-item text-center w-50 bg-success text-white">
            primaire: grass
          </li>
          <li className="list-group-item text-center w-50 bg-warning">
            secondaire: poison
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Compétences</h2>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item text-center w-50">overgrow</li>
          <li className="list-group-item text-center w-50">chlorophyll</li>
        </ul>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center">Statistiques</h2>
        <div className="row">
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
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">65</p>
            </div>
            <h5 className="text-center">special defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p>
            </div>
            <h5 className="text-center">speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p>
            </div>
            <h5 className="text-center">Life</h5>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Avis</h2>
        <p className="fw-bold">Lorem ipsum</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum
          optio exercitationem laudantium obcaecati, eum saepe distinctio minus
          modi ullam tenetur nobis inventore ipsam, consequuntur error itaque at
          hic dolorem.
        </p>
        <p className="fw-bold">Lorem ipsum</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum
          optio exercitationem laudantium obcaecati, eum saepe distinctio minus
          modi ullam tenetur nobis inventore ipsam, consequuntur error itaque at
          hic dolorem.
        </p>
        <p className="fw-bold">Lorem ipsum</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum
          optio exercitationem laudantium obcaecati, eum saepe distinctio minus
          modi ullam tenetur nobis inventore ipsam, consequuntur error itaque at
          hic dolorem.
        </p>
      </div>
    </div>
  );
}

export default OneProduct;
