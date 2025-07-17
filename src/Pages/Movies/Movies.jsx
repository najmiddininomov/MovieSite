import React from "react";
import "./Movies.scss";
import Avangers from "../../Assets/images/avangers.png";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import Genre from "../../Components/Genre/Genre";
import Prem from "../../Components/Prem/Prem";

const Movies = () => {
  return (
    <div className="Movies">
      <div className="hero">
        <div className="container">
          <div className="hero-img">
            <img src={Avangers} alt="" />
          </div>
          <div className="hero-title">
            <h2>Avengers : Endgame</h2>
            <p>
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </p>
            <div className="buttons">
              <button className="playNow">
                <CiPlay1 /> Play Now
              </button>
              <div className="icon-box">
                <AiOutlineLike />
              </div>
              <div className="icon-box">
                <HiOutlineVolumeUp />
              </div>
              <div className="icon-box">
                <MdAddCircleOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Genre/>
      <Prem/>
    </div>
  );
};

export default Movies;
