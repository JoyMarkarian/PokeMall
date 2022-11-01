function OneProduct(props) {
  function letter(word) {
    const result = `${word}`.charAt(0).toUpperCase() + `${word}`.slice(1).toLowerCase();
    return result;
  }
  const {
    image,
    name,
    index,
    price,
    primaryType,
    secondaryType,
    firstAbility,
    secondAbility,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    life,
    id,
    setId,
  } = props;
  return (
    <div className="container-fluid divPrincipale">
      <div className="d-flex justify-content-around">
        {index === 1 ? (
          ""
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => setId(id - 1)}
            onKeyDown={() => setId(id - 1)}
          >
            {" "}
            &larr; previous
          </button>
        )}
        {index === 51 ? (
          ""
        ) : (
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setId(id + 1)}
            onKeyDown={() => setId(id + 1)}
          >
            next &rarr;
          </button>
        )}
      </div>
      <div className="row pt-5">
        <div className="col-6 text-center">
          <img alt="pokemon" src={image} className="img-fluid pulse" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center importantText">{letter(name)}</h1>
            <p className="fw-bold text-center importantText">ID: 00{index}</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold textRegular">price: {price}$</p>
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
            <li
              className={`list-group-item text-center w-25 me-1 textRegular ${primaryType}`}
            >
              {letter(primaryType)}
            </li>
            {secondaryType ? (
              <li
                className={`list-group-item text-center w-25 ms-1 textRegular ${secondaryType}`}
              >
                {letter(secondaryType)}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="mt-4 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h2 className="text-center importantText">Abilities</h2>
          <ul className="list-group list-group-horizontal justify-content-center">
            <li
              className={`list-group-item w-25 p-0 text-center pt-2 pb-2 me-1 textRegular ${primaryType}`}
            >
              {letter(firstAbility)}
            </li>
            {secondAbility ? (
              <li
                className={`list-group-item w-25 p-0 text-center pt-2 pb-2 ms-1 textRegular ${primaryType}`}
              >
                {letter(secondAbility)}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center importantText">Stats</h2>
        <div className="row mt-4">
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{attack}</p>
            </div>
            <h5 className="text-center textRegular">Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{defense}</p>
            </div>
            <h5 className="text-center textRegular">Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{specialAttack}</p>
            </div>
            <h5 className="text-center textRegular">Special Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{specialDefense}</p>
            </div>
            <h5 className="text-center textRegular">Special Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{speed}</p>
            </div>
            <h5 className="text-center textRegular">Speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div className="rounded-circle bg-info text-white stats">
              <p className="text-center lh-lg textRegular">{life}</p>
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
