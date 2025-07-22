import React from "react";
import "./Desc.scss";
import { FaPlus } from "react-icons/fa6";
import logo from "../../Assets/images/Container.svg";
import Image from "../../Assets/images/Image (7).svg";
import Image2 from "../../Assets/images/Image (8).svg";

const Desc = () => {
  return (
    <div className="Desc">
      <div className="container">
        <div className="info">
          <div className="titles">
            <h2 className="sub-title">Description</h2>
            <p className="title">
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.   A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.   A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.Indian village where spirituality, fate and folklore rule Indian village where spirituality, fate and folklore rule
            </p>
          </div>

          <div className="review">
            <div className="review-title">
              <h2>Reviews</h2>
              <button className="add">
                <FaPlus />
                Add Your Review
              </button>
            </div>
            <div className="card-wrp">
              <div className="card">
                <div className="rate">
                  <div>
                    <p>Aniket Roy</p>
                    <h2 className="where">From India</h2>
                  </div>
                  <h2 className="stars">
                    <img src={logo} alt="" />
                    4.5
                  </h2>
                </div>
                <p className="Review-desc">
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </div>
              <div className="card">
                <div className="rate">
                  <div>
                    <p>Aniket Roy</p>
                    <h2 className="where">From India</h2>
                  </div>
                  <h2 className="stars">
                    <img src={logo} alt="" />
                    4.5
                  </h2>
                </div>
                <p className="Review-desc">
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="date">
          {/* Released Year */}
          <div className="released-year">
            <div className="icon">📅</div>
            <div className="info">
              <span className="label">Released Year</span>
              <span className="value">2022</span>
            </div>
          </div>

          {/* Available Languages */}
          <div className="section">
            <span className="label">Available Languages</span>
            <div className="badges">
              {["English", "Hindi", "Tamil", "Telegu", "Kannada"].map(
                (lang) => (
                  <span className="badge" key={lang}>
                    {lang}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Ratings */}
          <div className="section">
            <span className="label">Ratings</span>
            <div className="ratings">
              <div className="rating-box">
                <span className="source">IMDb</span>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span className="score">4.5</span>
              </div>
              <div className="rating-box">
                <span className="source">Streamvibe</span>
                <div className="stars">⭐⭐⭐⭐☆</div>
                <span className="score">4</span>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div className="section">
            <span className="label">Genres</span>
            <div className="badges">
              <span className="badge">Action</span>
              <span className="badge">Adventure</span>
            </div>
          </div>

          {/* Director */}
          <div className="section">
            <span className="label">Director</span>
            <div className="person-card">
              <img src={Image} alt="Director" />
              <div>
                <span className="name">Rishab Shetty</span>
                <span className="country">From India</span>
              </div>
            </div>
          </div>

          {/* Music */}
          <div className="section">
            <span className="label">Music</span>
            <div className="person-card">
              <img src={Image2} alt="Music Director" />
              <div>
                <span className="name">B. Ajaneesh Loknath</span>
                <span className="country">From India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
