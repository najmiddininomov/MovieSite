import React from "react";
import "./Genre.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../Assets/images/slide.svg";
import container from "../../Assets/images/dragon.jpg";
import { Link } from "react-router-dom";
const Genre = () => {
  return (
    <div className="Genre">
      <div className="container">
        <div className="g-title">
          <h2> Trending</h2>
          <div className="g-icons">
            <div className="icon-box ">
              <FaArrowLeft />
            </div>

            <img src={logo} alt="" />
            <div className="icon-box ">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card" data-aos="fade-right">
            <img src={container} alt="" />
            <h2 className="card-title">
              <Link to="/Inside">How to Train Your Dragon </Link>
            </h2>
            <p>06 Jun 2025</p>
          </div>
          <div className="card">
            <img src={container} alt="" />
            <h2 className="card-title">
              <Link to="/Inside">How to Train Your Dragon </Link>
            </h2>
            <p>06 Jun 2025</p>

          </div>
          <div className="card">
            <img src={container} alt="" />
            <h2 className="card-title">
              <Link to="/Inside">How to Train Your Dragon </Link>
            </h2>
            <p>06 Jun 2025</p>

          </div>
          <div className="card">
            <img src={container} alt="" />
            <h2 className="card-title">
              <Link to="/Inside">How to Train Your Dragon </Link>
            </h2>
            <p>06 Jun 2025</p>

          </div>
          <div className="card">
            <img src={container} alt="" />
            <h2 className="card-title">
              <Link to="/Inside">How to Train Your Dragon </Link>
            </h2>
            <p>06 Jun 2025</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
