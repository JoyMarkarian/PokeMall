function Home() {
  return (
    <div className="h-auto">
      <div className="ImageBck">
        <h1 className="CollectAll text-end">COLLECT THEM ALL</h1>
      </div>
      <div className="container">
        <h1 className="text-center">NEWS</h1>
        <div className="container-fluide">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt=""
            className="col-4 border border-3 border-muted rounded m-1 shadow-lg"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
            alt=""
            className="col-7 border border-3 border-muted rounded m-1 shadow-lg"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
            alt=""
            className="col-4 border rounded m-1 shadow-lg"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
            alt=""
            className="col-7 border rounded m-1 shadow-lg bg-light"
          />
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">BEST SELLERS</h1>
        <div
          id="carouselHome"
          className="carousel carousel-dark slide border border-3 border-muted rounded m-1 shadow-lg"
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
