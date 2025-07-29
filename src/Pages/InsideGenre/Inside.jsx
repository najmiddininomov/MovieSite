import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import Api_Service from '../../Service/Service_Api';
import Prem from "../../Components/Prem/Prem";
import Desc from '../../Components/Desc/Desc';
import Actior from '../../Components/Actior/Actior';
import './Inside.scss';
import axios from 'axios';

const Inside = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`movie/${id}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI0Y2I2MTE2YjVmNDk4OThiNDFjMjBlMzVkM2E3NiIsIm5iZiI6MTc1MzMzMjU1MS40MjU5OTk5LCJzdWIiOiI2ODgxYmI0NzAzZGZkMWYxMDIxNmIxZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qqhQ8dQMQ8VdFigS7O5sBjKsxBpb7QjAe4cEuex1KPw",
          },
        });
        setMovie(res.data);

        const trailerRes = await axios.get(`movie/${id}/videos`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI0Y2I2MTE2YjVmNDk4OThiNDFjMjBlMzVkM2E3NiIsIm5iZiI6MTc1MzMzMjU1MS40MjU5OTk5LCJzdWIiOiI2ODgxYmI0NzAzZGZkMWYxMDIxNmIxZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qqhQ8dQMQ8VdFigS7O5sBjKsxBpb7QjAe4cEuex1KPw",
          },
        });

        const trailer = trailerRes.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }

      } catch (err) {
        console.error("Xatolik yuz berdi:", err);
      }
    };

    getMovie();
  }, [id]);

  return (
    <div className="Inside">
      {movie ? (
        <>
          {showTrailer ? (
            <div className="trailer">
              <div className="container">
                {/* <button className="backBtn" onClick={() => setShowTrailer(false)}>
                  ⬅ Back
                </button> */}
                <iframe
                  width="100%"
                  height="600vh"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="like">
              <div className="container">
                <div className="hero-img">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="hero-title">
                  <h2>{movie.title}</h2>
                  <p>{movie.overview.slice(0, 149 )}</p>
                  <p><strong>Release Date:</strong> {movie.release_date}</p>
                  <div className="buttons">
                    <button
                      className="playNow"
                      onClick={() => setShowTrailer(true)}
                      disabled={!trailerKey}
                    >
                      <CiPlay1 /> Play Now
                    </button>
                    <div className="icon-box"><AiOutlineLike /></div>
                    <div className="icon-box"><HiOutlineVolumeUp /></div>
                    <div className="icon-box"><MdAddCircleOutline /></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Actior id={id} />
          <Desc id={id} />
          <Prem />
        </>
      ) : (
        <div className="loading">
          <p>Yuklanmoqda...</p>
        </div>
      )}
    </div>
  );
};

export default Inside;
