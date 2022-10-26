function Home() {
  return (
    <div className="h-auto">
      <div className="ImageBck">
        <div className="HomeCollect d-flex justify-content-end">
          <img
            src="data:image/png;base64,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"
            alt=""
          />{" "}
          <h2 className="CollectAll pt-4 ">COLLECT THEM ALL</h2>
          <img
            src="data:image/png;base64,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"
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">NEWS</h1>
        <div className="container-fluide d-md-flex flex-wrap">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt=""
            className=" col-12 col-md-5 col-xl-2 border rounded shadow-lg mb-1 "
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
            alt=""
            className="flex-fill col-12 col-md-5 col-xl-2 border rounded shadow-lg mb-1 ms-md-1"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
            alt=""
            className="flex-fill col-12 col-md-5 col-xl-2 border rounded shadow-lg mb-1 ms-xl-1"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
            alt=""
            className=" col-12 col-md-5 col-xl-2 border rounded shadow-lg mb-1 ms-md-1"
          />
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">BEST SELLERS</h1>
        <div
          id="carouselHome"
          className="carousel carousel-dark slide border border-3 border-muted rounded m-1 shadow-lg mb-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 4"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 5"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First Pokemon's name</h5>
                <p>HP First slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second Pokemon's name</h5>
                <p>HP Second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third Pokemon's name</h5>
                <p>HP Third slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fourth Pokemon's name</h5>
                <p>HP Fourth slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fifth Pokémon's Name</h5>
                <p>HP Fifth slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
