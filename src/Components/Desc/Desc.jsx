import React, { useEffect, useState } from "react";
import "./Desc.scss";
import { FaPlus } from "react-icons/fa6";
import Api_Service from "../../Service/Service_Api";

const Desc = ({ id }) => {
  const [details, setDetails] = useState(null);
  const [director, setDirector] = useState(null);
  const [musik, setMusik] = useState(null);
  const [showFull, setShowFull] = useState(false);

  const getMovieDetails = async () => {
    try {
      const res = await Api_Service.getData(`movie/${id}`);
      const credits = await Api_Service.getData(`movie/${id}/credits`);

      setDetails(res.data);

      const crew = credits.data.crew;

      const directorData = crew.find((person) => person.job === "Director");
      setDirector(directorData);

      const musikData =
        crew.find((person) => person.job === "Original Music Composer") ||
        crew.find((person) => person.job === "Sound");
      setMusik(musikData);

    } catch (error) {
      console.error("Ma'lumotlarni yuklashda xatolik:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <div className="Desc">
      <div className="container">
        {details ? (
          <>
            {/* Description */}
            <div className="info">
              <div className="titles">
                <h2 className="sub-title">Description</h2>
                <p className="title">
                  {showFull
                    ? details.overview
                    : `${details.overview?.slice(0, 200)}...`}
                  {details.overview?.length > 200 && (
                    <button onClick={() => setShowFull(!showFull)} className="read-more-btn">
                      {showFull ? "Show less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>

              {/* Reviews (mock) */}
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
                      <h2 className="stars">⭐⭐⭐⭐☆ <span className="score">4.5</span></h2>
                    </div>
                    <p className="Review-desc">
                      This movie was recommended to me by a very dear friend...
                    </p>
                  </div>
                  <div className="card">
                    <div className="rate">
                      <div>
                        <p>Aniket Roy</p>
                        <h2 className="where">From India</h2>
                      </div>
                      <h2 className="stars">⭐⭐⭐⭐☆ <span className="score">4.5</span></h2>
                    </div>
                    <p className="Review-desc">
                      This movie was recommended to me by a very dear friend...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side info: release year, ratings, genres, etc */}
            <div className="date">

              {/* Released Year */}
              <div className="released-year">
                <div className="icon">📅</div>
                <div className="info">
                  <span className="label">Released Year</span>
                  <span className="value">{details.release_date?.split("-")[0]}</span>
                </div>
              </div>

              {/* Languages */}
              <div className="section">
                <span className="label">Available Languages</span>
                <div className="badges">
                  {details.spoken_languages?.map((lang) => (
                    <span className="badge" key={lang.iso_639_1}>
                      {lang.english_name || lang.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="section">
                <span className="label">Ratings</span>
                <div className="ratings">
                  <div className="rating-box">
                    <span className="source">TMDB</span>
                    <div className="stars">
                      {"⭐".repeat(Math.round(details.vote_average || 0))}
                    </div>
                    <span className="score">
                      {details.vote_average?.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div className="section">
                <span className="label">Genres</span>
                <div className="badges">
                  {details.genres?.map((genre) => (
                    <span className="badge" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Director */}
              <div className="section">
                <span className="label">Director</span>
                {director ? (
                  <div className="person-card">
                    <img
                      src={
                        director.profile_path
                          ? `https://image.tmdb.org/t/p/w200${director.profile_path}`
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      alt="Director"
                    />
                    <div>
                      <span className="name">{director.name}</span>
                      <span className="country">{director.known_for_department}</span>
                    </div>
                  </div>
                ) : (
                  <p>Director topilmadi</p>
                )}
              </div>

              {/* Music */}
              <div className="section">
                <span className="label">Music</span>
                {musik ? (
                  <div className="person-card">
                    <img
                      src={
                        musik.profile_path
                          ? `https://image.tmdb.org/t/p/w200${musik.profile_path}`
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      alt="Music Director"
                    />
                    <div>
                      <span className="name">{musik.name}</span>
                      <span className="country">{musik.known_for_department}</span>
                    </div>
                  </div>
                ) : (
                  <p>Musikant topilmadi</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default Desc;
