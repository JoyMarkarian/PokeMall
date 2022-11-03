import img from "../assets/previous.png";
import img2 from "../assets/next.png";

function OneProduct(props) {
  function letter(word) {
    const result =
      `${word}`.charAt(0).toUpperCase() + `${word}`.slice(1).toLowerCase();
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
          <p />
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => setId(id - 1)}
            onKeyDown={() => setId(id - 1)}
          >
            <img
              className="oneProductBtn  d-md-none d-lg-none d-xl-none d-xxl-none"
              alt="bouton previous"
              src={img}
            />
          </button>
        )}
        {index === 51 ? (
          <p />
        ) : (
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setId(id + 1)}
            onKeyDown={() => setId(id + 1)}
          >
            <img
              className="oneProductBtn d-md-none d-lg-none d-xl-none d-xxl-none"
              alt="bouton next"
              src={img2}
            />
          </button>
        )}
      </div>
      <div className="row pt-4">
        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 d-flex align-items-center">
          {index === 1 ? (
            " "
          ) : (
            <button
              type="button"
              className="btn d-none d-md-block d-lg-block d-xl-block"
              onClick={() => setId(id - 1)}
              onKeyDown={() => setId(id - 1)}
            >
              <img
                className="oneProductBtn d-md-lg-xl-none"
                alt="bouton previous"
                src={img}
              />
            </button>
          )}
        </div>
        <div className="col-6 col-sm-6 col-md-5 col-lg-5 text-center d-flex flex-column justify-content-center">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center importantText">{letter(name)}</h1>
            <p className="fw-bold text-center importantText">ID : 00{index}</p>
          </div>
          <img
            alt="pokemon"
            src={image}
            className="imageOneProduct align-self-center mb-3"
          />
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold fs-5 m-0 textRegular">Price : {price}$</p>
            <button
              type="button"
              className="btn btn-warning shadow textRegular mt-1"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-5 col-lg-5 d-flex flex-column justify-content-around">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            {secondaryType ? (
              <h2 className="text-center importantText">Types</h2>
            ) : (
              <h2 className="text-center importantText">Type</h2>
            )}
            <ul className=" list-group list-group-horizontal-sm justify-content-center align-items-center">
              <li
                className={`list-group-item text-center mb-1 me-1 textRegular typeAbilities ${primaryType}`}
              >
                {letter(primaryType)}
              </li>
              {secondaryType ? (
                <li
                  className={`list-group-item text-center mb-1 me-1 textRegular typeAbilities ${secondaryType}`}
                >
                  {letter(secondaryType)}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {secondAbility ? (
              <h2 className="text-center importantText">Abilities</h2>
            ) : (
              <h2 className="text-center importantText">Ability</h2>
            )}
            <ul className="list-group list-group-horizontal-sm justify-content-center align-items-center">
              <li
                className={`list-group-item p-0 mb-1 me-1 text-center pt-2 pb-2 textRegular typeAbilities ${primaryType}`}
              >
                {letter(firstAbility)}
              </li>
              {secondAbility ? (
                <li
                  className={`list-group-item p-0  mb-1 me-1 text-center pt-2 pb-2 textRegular typeAbilities ${primaryType}`}
                >
                  {letter(secondAbility)}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 d-flex align-items-center">
          {index === 51 ? (
            ""
          ) : (
            <button
              type="button"
              className="btn d-none d-md-block d-lg-block d-xl-block"
              onClick={() => setId(id + 1)}
              onKeyDown={() => setId(id + 1)}
            >
              <img className="oneProductBtn" alt="bouton next" src={img2} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 border">
        <h2 className="text-center importantText">Stats</h2>
        <div className="row mt-4">
          <div className="d-flex flex-column align-items-center col-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{attack}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{defense}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{specialAttack}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Special Attack</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{specialDefense}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Special Defense</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{speed}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Speed</h5>
          </div>
          <div className="d-flex flex-column align-items-center col-4 mt-4">
            <div
              className={`rounded-circle text-white stats oneProductStats ${primaryType}`}
            >
              <p className="text-center textRegular">{life}</p>
            </div>
            <h5 className="text-center textRegular mt-2">Life</h5>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center importantText mt-4">Reviews</h2>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              optio exercitationem laudantium obcaecati, eum saepe distinctio
              minus modi ullam tenetur nobis inventore ipsam, consequuntur error
              itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 border-end border-2">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum optio exercitationem laudantium obcaecati, eum saepe
              distinctio minus modi ullam tenetur nobis inventore ipsam,
              consequuntur error itaque at hic dolorem.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <p className="fw-bold text-center textRegular">Lorem ipsum</p>
            <p className="textRegular container">
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
