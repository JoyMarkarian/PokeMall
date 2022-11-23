import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import editMeta from "@services/seo";

import "../Home.css";

function Home() {
  const [randomData, setRandomData] = useState([]);
  const [random1Data, setRandom1Data] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/rand`)
      .then((res) => res.json())
      .then((data) => setRandomData(data))
      .catch((err) => console.error(err));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/rand1`)
      .then((res) => res.json())
      .then((data) => setRandom1Data(data[0]))
      .catch((err) => console.error(err));
  }, []);

  editMeta("Home", "Welcome to Pokemon's Largest Online Supermarket");

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
                <HashLink
                  to={`/products/${random1Data && random1Data.index}#`}
                  className="bNews
                btn btn-success rounded
                align-self-end"
                  type="button"
                >
                  Adopt Now
                </HashLink>
              </div>
            </div>
            <div className="hardChoose w-100 d-flex flex-column my-1">
              <h3 className="newsTitle m-2">Is it hard to choose?</h3>
              <div className="imgNewsHome d-flex">
                <img
                  src=".\src\assets\Hard_choose_home.png"
                  alt=""
                  className="w-50 p-2"
                />
                <h5 className="hardPara d-flex flex-column justify-content-center">
                  Let the right Pokemon find you !
                </h5>
              </div>
              <div className="buttonNews d-flex justify-content-center h-25 p-2">
                <HashLink
                  to={`/products/${random1Data && random1Data.index}#`}
                  className="bNews
                btn btn-success rounded
                align-self-end"
                  type="button"
                >
                  Adopt Now
                </HashLink>
              </div>
            </div>
          </div>
          <div className="season d-flex my-1">
            <img
              src="https://w0.peakpx.com/wallpaper/380/483/HD-wallpaper-pokeball-pokemon-anime-glow-snow.jpg"
              alt=""
              className="customImageWidth d-none d-md-block d-lg-block d-xl-block"
            />
            <div className="christHome w-100">
              <div className="christHomeShop h-100 d-flex flex-column">
                <h4 className="newsTitle h-100 d-flex  flex-column justify-content-center">
                  The magic of Christmas with a new friend !
                </h4>
                <div className="buttonNews d-flex justify-content-center mb-2">
                  <HashLink
                    to={`/products/${random1Data && random1Data.index}#`}
                    className="bNews
                btn btn-success rounded
                align-self-end"
                    type="button"
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bestSellersHome">
        <div className="HBest  mt-5">
          <h1 className="titleHome text-center m-3">BEST SELLERS</h1>
        </div>
        <div
          id="carouselCaptionsHome"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators m-0">
            <button
              type="button"
              data-bs-target="#carouselCaptionsHome"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              className=""
              type="button"
              data-bs-target="#carouselCaptionsHome"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              className=""
              type="button"
              data-bs-target="#carouselCaptionsHome"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
            <button
              className=""
              type="button"
              data-bs-target="#carouselCaptionsHome"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            />
            <button
              className=""
              type="button"
              data-bs-target="#carouselCaptionsHome"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            />
          </div>
          {randomData.length > 0 && (
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={randomData[0].url}
                  className="d-block w-75"
                  alt="..."
                />
                <div className="btnSliderHome d-flex justify-content-center">
                  <HashLink
                    className="bNews
                btn btn-success rounded
                "
                    to={`/products/${randomData[0].index}#`}
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={randomData[1].url}
                  className="d-block w-75"
                  alt="..."
                />
                <div className="btnSliderHome d-flex justify-content-center">
                  <HashLink
                    className="bNews
                btn btn-success rounded
                "
                    to={`/products/${randomData[1].index}#`}
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={randomData[2].url}
                  className="d-block w-75"
                  alt="..."
                />
                <div className="btnSliderHome d-flex justify-content-center">
                  <HashLink
                    className="bNews
                btn btn-success rounded
                "
                    to={`/products/${randomData[2].index}#`}
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={randomData[3].url}
                  className="d-block w-75"
                  alt="..."
                />
                <div className="btnSliderHome d-flex justify-content-center">
                  <HashLink
                    className="bNews
                btn btn-success rounded
                "
                    to={`/products/${randomData[3].index}#`}
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={randomData[4].url}
                  className="d-block w-75"
                  alt="..."
                />
                <div className="btnSliderHome d-flex justify-content-center">
                  <HashLink
                    className="bNews
                btn btn-success rounded
                "
                    to={`/products/${randomData[4].index}#`}
                  >
                    Adopt Now
                  </HashLink>
                </div>
              </div>
            </div>
          )}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCaptionsHome"
            data-bs-slide="prev"
          >
            <span
              className="sliderArrowHome carousel-control-prev-icon  rounded-circle"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselCaptionsHome"
            data-bs-slide="next"
          >
            <span
              className="sliderArrowHome carousel-control-next-icon  rounded-circle"
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
