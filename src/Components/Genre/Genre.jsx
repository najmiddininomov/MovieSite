import React from "react";
import "./Genre.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import logo from "../../Assets/images/slide.svg";
import container from "../../Assets/images/dragon.jpg";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Genre = ({title = "Trending"}) => {

  return (
    <div className="Genre">
      <div className="container">
        <div className="g-title">
          <h2>{title}</h2>
          <div className="g-icons">
            {/* <div className="icon-box ">
              <FaArrowLeft />
            </div> */}
            {/* <img src={logo} alt="logo" /> */}
            {/* <div className="icon-box ">
              <FaArrowRight />
            </div> */}
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 3000,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 6 },
            768: { slidesPerView: 3},
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <Link to="/Inside">
                <div className="card">
                  <img src={container} alt="movie" />
                  <div className="card-info">
                    <h2 className="card-title">How to Train Your Dragon</h2>
                    <p>06 Jun 2025</p>
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
