import React from 'react'
import Avangers from "../../Assets/images/shot.png";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import Prem from "../../Components/Prem/Prem";
import './Inside.scss'
import Desc from '../../Components/Desc/Desc';
import Actior from '../../Components/Actior/Actior';
const Inside = () => {
  return (
    <div className='Inside'>
            <div className="like">
              <div className="container">
                <div className="hero-img">
                  <img src={Avangers} alt="" />
                </div>
                <div className="hero-title">
                  <h2>Kantara</h2>
                  <p>
                   A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
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
            <Actior/>
            <Desc/>
            <Prem/>
    </div>

  )
}

export default Inside