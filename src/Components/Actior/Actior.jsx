import React from "react";
import "./Actior.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const actors = [
    {
      id: 1,
      img: "https://hips.hearstapps.com/hmg-prod/images/actor-brad-pitt-attends-the-photocall-of-the-movie-wolfs-news-photo-1726680022.jpg",
      name: "Brad Pitt",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg",
      name: "Charles Leclerc",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
      name: "Lewis Hamilton",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmUFQUFs6e1J_a-zBraiQ0cSQrYlUT7LmPQ&s",
      name: "Max Verstappen",
    },
    {
      id: 5,
      img: "https://hips.hearstapps.com/hmg-prod/images/f1-the-moive-photo-0109-6850a67a3c6c1.jpg?crop=0.7029629629629629xw:1xh;center,top&resize=1200:*",
      name: "Damson Idris",
    },
    {
      id: 6,
      img: "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*",
      name: "Lionel Messi",
    },
    {
      id: 7,
      img: "https://cdn.shopify.com/s/files/1/0759/8840/2471/files/eminem-mm-marshall-mathers-slim-shady-2002-live-concert-stage-set-album_1024x1024.jpg?v=1698937782",
      name: "Marshall Bruce Mathers III",
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmUFQUFs6e1J_a-zBraiQ0cSQrYlUT7LmPQ&s",
      name: "Damson Idris",
    },
    {
      id: 9,
      img: "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/8507/live/8a1e2550-d02a-11ef-97aa-d7cb0428bf07.jpg",
      name: "Khvicha Kvaratskhelia",
    },
  ];

const Actior = () => {
  return (
    <div className="Actior">
      <div className="container">
        <h2 className="actors-name">
            Actiors
        </h2>
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
          {actors.map((actor) => (
            <SwiperSlide key={actor.id}>
              <Link to="/Actior">
              <div className="ac-card">
                <img src={actor.img} alt={actor.name} />
                <div className="ac-card-info">
                  <h2 className="name">{actor.name}</h2>
                  <p className="character">{actor.character}</p>
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
