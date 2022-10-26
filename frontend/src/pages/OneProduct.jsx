function OneProduct() {
  const data = {
    labels: ["attack", "defense", "special_attack", "special_defense", "speed"],
    datasets: [
      {
        label: "pokemon's stats",
        data: [49, 49, 65, 65, 45],
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      },
    ],
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <h1>Carapuce</h1>
        <button type="button" className="btn btn-danger">
          ajouter au panier
        </button>
      </div>
      <div className="d-flex justify-content-around align-items-end">
        <img
          alt="pokemon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          className="img-fluid"
        />
        <p className="fw-bold">ID: 001</p>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Type</h2>
        <ul className=" list-group list-group-horizontal">
          <li className="list-group-item text-center w-50 bg-success text-white">primaire: grass</li>
          <li className="list-group-item text-center w-50 bg-warning" >secondaire: poison</li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Compétences</h2>
        <ul className="list-group list-group-horizontal list-group-flush">
          <li className="list-group-item text-center w-50">overgrow</li>
          <li className="list-group-item text-center w-50">chlorophyll</li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Statistiques</h2>
        <div className="row">
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">49</p></div>
            <h5 className="text-center">attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">49</p></div>
            <h5 className="text-center">defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">65</p></div>
            <h5 className="text-center">special attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">65</p></div>
            <h5 className="text-center">special defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p></div>
            <h5 className="text-center">speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg">45</p></div>
            <h5 className="text-center">Life</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
