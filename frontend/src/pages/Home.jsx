import "../Home.css";

function Home() {
  return (
    <div className="homePage">
      <div className="imageBck">
        <div>
          <h1 className="colorTitle d-flex align-items-end  flex-row-reverse me-2">
            COLLECT THEM ALL !
          </h1>
        </div>
      </div>
      <div className="newsHomeDiv container-fluid">
        <h1 className="titleHome text-center m-3">NEWS</h1>
        <div className="newsHome">
          <div className="lastChoose d-md-flex gap-md-2">
            <div className="lastArrival d-flex flex-column my-1">
              <h3 className="newsTitle m-2">Last Arrival</h3>
              <div className="imgNewsHome d-flex">
                <img
                  src="https://media.discordapp.net/attachments/1019616949627531304/1037679818067693648/unknown.png?width=566&height=580"
                  alt=""
                  className="w-50 p-2"
                />
                <h5 className="lastPara d-flex flex-column justify-content-center">
                  A Pokemon is waiting for you!
                </h5>
              </div>
              <div className="buttonNews d-flex justify-content-center h-25 p-2">
                <button
                  className="bNews
                btn btn-success rounded
                align-self-end"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="hardChoose w-100 d-flex flex-column my-1">
              <h3 className="newsTitle m-2">Is it hard to choose?</h3>
              <div className="imgNewsHome d-flex">
                <img
                  src="https://media.discordapp.net/attachments/1019616949627531304/1037679391397908500/unknown.png"
                  alt=""
                  className="w-50 p-2"
                />
                <h5 className="hardPara d-flex flex-column justify-content-center">
                  Let the right Pokemon find you !
                </h5>
              </div>
              <div className="buttonNews d-flex justify-content-center h-25 p-2">
                <button
                  className="bNews
                  btn btn-success rounded align-self-end"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="season d-flex my-1">
            <img
              src="https://w0.peakpx.com/wallpaper/380/483/HD-wallpaper-pokeball-pokemon-anime-glow-snow.jpg"
              alt=""
              className="w-50"
            />
            <div className="christHome w-100">
              <div className="christHomeShop h-100 d-flex flex-column">
                <h4 className="newsTitle h-100 d-flex  flex-column justify-content-center">
                  The magic of Christmas with a new friend !
                </h4>
                <div className="buttonNews d-flex justify-content-center mb-2">
                  <button
                    className="bNews
                    btn btn-success rounded"
                    type="button"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bestSellersHome container-fluid">
        <div className="HBest  mt-5">
          <h1 className="titleHome text-center m-3">BEST SELLERS</h1>
        </div>
        <div
          id="carouselCaptionsHome"
          className="carousel slide shadow container-fluid"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators m-0">
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="0"
              className="active bg-success"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              className="bg-success"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              className="bg-success"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
            <button
              className="bg-success"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            />
            <button
              className="bg-success"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            />
          </div>
          <div className="carousel-inner h-200">
            <div className="carousel-item active">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                className="imgSliderHome d-block w-75"
                alt="..."
              />
              <div className="btnSliderHome d-flex justify-content-center">
                <button
                  className="bNews
                btn btn-success rounded
                "
                  type="button"
                >
                  Adopt Now
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                className="imgSliderHome d-block w-75"
                alt="..."
              />
              <div className="btnSliderHome d-flex justify-content-center">
                <button
                  className="bNews
                btn btn-success rounded
                "
                  type="button"
                >
                  Adopt Now
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                className="imgSliderHome d-block w-75"
                alt="..."
              />
              <div className="btnSliderHome d-flex justify-content-center">
                <button
                  className="bNews
                btn btn-success rounded
                "
                  type="button"
                >
                  Adopt Now
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg"
                className="imgSliderHome d-block w-75"
                alt="..."
              />
              <div className="btnSliderHome d-flex justify-content-center">
                <button
                  className="bNews
                btn btn-success rounded
                "
                  type="button"
                >
                  Adopt Now
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                className="imgSliderHome d-block w-75"
                alt="..."
              />
              <div className="btnSliderHome d-flex justify-content-center">
                <button
                  className="bNews
                btn btn-success rounded
                "
                  type="button"
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-success rounded-circle"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-success rounded-circle"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
