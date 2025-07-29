import React, { useEffect, useState } from "react";
import "./Actior.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Api_Service from "../../Service/Service_Api";


const Actior = ({ id }) => {
  const [getmovie, setGetMovie] = useState();
  const getApi = async () => {
    const res = await Api_Service.getData(`movie/${id}/credits`);

    setGetMovie(res.data.cast);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="Actior">
      <div className="container">
        <h2 className="actors-name">Actiors</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={7}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {getmovie &&
            getmovie.map((character) => (
              <SwiperSlide key={character.id}>
                <Link to={`/Actior/${character.id}`}>
                  <div className="ac-card">
                    <img
                      src={
                        character.profile_path
                          ? `https://image.tmdb.org/t/p/w200${character.profile_path}`
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      alt={character.name}
                    />

                    <div className="ac-card-info">
                      <h2 className="name">{character.name}</h2>
                      <p className="character">{character.character}</p>
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

export default Actior;
