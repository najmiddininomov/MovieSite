import React from "react";
import "./ActiorPage.scss";
import Prem from "../../Components/Prem/Prem";
import Genre from "../../Components/Genre/Genre";
import Bold from "../../Assets/images/BoldBro.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const ActiorPage = () => {
  return (
    <div className="ActiorPage">
      <div className="container">
        <div className="acWrp">
          <div className="ap-img">
            <img src={Bold} alt="" />
          </div>

          <div className="ap-info">
            <h2 className="apName">Anthony Carrigan</h2>

            <p className="apSubtitle">Biography</p>

            <p className="apDisc">
              Anthony Carrigan (born January 2, 1983) is an American actor. From
              2018 to 2023, he portrayed Chechen mobster NoHo Hank in the HBO
              series Barry, for which he was nominated three times for the
              Primetime Emmy Award for Outstanding Supporting Actor in a Comedy
              Series in 2019, 2022, and 2023. He is also known for playing Tyler
              Davies in the television series The Forgotten (2009–2010), Victor
              Zsasz in the FOX series Gotham (2014–2019), and robot Dennis Caleb
              McCoy in Bill & Ted Face the Music (2020).Carrigan was born
              January 2, 1983, in Winchester, Massachusetts. He graduated from
              Winchester High School and attended Carnegie Mellon University...{" "}
              <button className="readMore">
                Read more <MdOutlineKeyboardArrowRight />
              </button>
            </p>

            <div className="personalInfo">
              <h2 className="PInfo">Personal Info</h2>
              <div className="KnownFor">
                <div>
                  <h2>Known For</h2>
                  <p>Acting</p>
                </div>
                <div>
                  <h2>Known Credits</h2>
                  <p>29</p>
                </div>
                <div>
                  <h2>Gender</h2>
                  <p>Male</p>
                </div>
                <div>
                  <h2>Birthdate</h2>
                  <p>2 January 1983 (42 years old)</p>
                </div>
                <div>
                  <h2>Place of Birth</h2>
                  <p>Boston, Massachusetts, USA</p>
                </div>
                <div>
                  <h2>Also Known As</h2>
                  <p>آنتونی کاریگان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Genre  title="Known For"/>
      <Prem />
    </div>
  );
};

export default ActiorPage;
