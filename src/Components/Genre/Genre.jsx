import React, { useEffect, useState } from "react";
import "./Genre.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// API xizmati
import Api_Service from "../../Service/Service_Api";

const Genre = ({ title = "Trending", URL, autoplayDelay = 3000, loop = true, navigationId }) => {
  const [movies, setMovies] = useState([]);

 const getApi = async () => {
  try {
    const response = await Api_Service.getData(URL);
    const results = response.data.results || response.data.cast || [];
    setMovies(results);
  } catch (error) {
    console.log("Ma'lumot olishda xatolik:", error);
  }
};

  useEffect(() => {
    getApi();
  }, [URL]);

  return (
    <div className="Genre">
      <div className="container">
        <div className="g-title">
          <h2>{title}</h2>
          <div className="g-icons">
            <div className="icon-box" id={`${navigationId}-prev`}>
              <FaArrowLeft />
            </div>
            <div className="icon-box" id={`${navigationId}-next`}>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: autoplayDelay,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: `#${navigationId}-prev`,
            nextEl: `#${navigationId}-next`,
          }}
          loop={loop && movies.length > 5}
          breakpoints={{
            1024: { slidesPerView: 6 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/Inside/${movie.id}`}>
                <div className="card">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/300x450?text=No+Image"
                    }
                    alt={movie.title}
                  />
                  <div className="card-info">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.release_date}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Genre;
