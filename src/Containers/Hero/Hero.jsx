import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper p-5 ">
        <div className="container-xxl ">
          <div className="position-relative row p-0 ">
            <div className="col-6 p-0 hero-content">
              <div className=" p-5">
                <h1 className="m-0">
                  Find your perfect <br /> place to stay
                </h1>
                <p className="m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="hero-video d-flex align-items-center gap-3 ">
                  <img src="/images/icon-play.png" alt="play" />
                  <h1 className="fs-3 m-0 pb-2">Watch Video</h1>
                </div>
              </div>
            </div>
            <div className="col-6 p-0 ">
              <div className="hero-img">
                <img src="/images/hero.png" alt="hero" />
              </div>
            </div>
            <div className="search-bar position-absolute">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
