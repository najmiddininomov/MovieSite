import React, { useEffect, useState } from "react";
import "./ActiorPage.scss";
import Prem from "../../Components/Prem/Prem";
import Genre from "../../Components/Genre/Genre";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import Api_Service from "../../Service/Service_Api";

const ActiorPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const getperson = async () => {
    try {
      const res = await Api_Service.getData(`person/${id}`);
      setPerson(res.data);
      console.log(res);
    } catch (err) {
      console.log("Xatolik yuz berdi:", err);
    }
  };

  useEffect(() => {
    getperson();
  }, [id]);

  const calculateAge = (birthdate) => {
    const birth = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="ActiorPage">
      <div className="container">
        <div className="acWrp">
          {person ? (
            <>
              <div className="ap-img">
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={person.name}
                />
              </div>

              <div className="ap-info">
                <h2 className="apName">{person.name}</h2>

                <p className="apSubtitle">Biography</p>

                <p className="apDisc">
                  {person.biography ? (
                    <>
                      {readMore
                        ? person.biography
                        : `${person.biography.slice(0, 600)}... `}
                      {person.biography.length > 600 && (
                        <button
                          className="readMore"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {readMore ? "Show less" : "Read more"}{" "}
                          <MdOutlineKeyboardArrowRight />
                        </button>
                      )}
                    </>
                  ) : (
                    "No biography available."
                  )}
                </p>

                <div className="personalInfo">
                  <h2 className="PInfo">Personal Info</h2>
                  <div className="KnownFor">
                    <div>
                      <h2>Known For</h2>
                      <p>{person.known_for_department || "—"}</p>
                    </div>
                    <div>
                      <h2>Known Credits</h2>
                      <p>
                        {person.popularity
                          ? Math.round(person.popularity)
                          : "—"}
                      </p>
                    </div>
                    <div>
                      <h2>Gender</h2>
                      <p>
                        {person.gender === 1
                          ? "Female"
                          : person.gender === 2
                          ? "Male"
                          : "Other"}
                      </p>
                    </div>
                    <div>
                      <h2>Birthdate</h2>
                      <p>
                        {person.birthday
                          ? `${person.birthday} (${calculateAge(
                              person.birthday
                            )} years old)`
                          : "—"}
                      </p>
                    </div>
                    <div>
                      <h2>Place of Birth</h2>
                      <p>{person.place_of_birth || "—"}</p>
                    </div>
                    <div>
                      <h2>Also Known As</h2>
                      <p>
                        {person.also_known_as && person.also_known_as.length > 0
                          ? person.also_known_as[0]
                          : "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Yuklanmoqda...</p>
          )}
        </div>
      </div>

      {person && (
        <Genre
          title={`Movies with ${person.name}`}
          URL={`person/${id}/movie_credits`}
        />
      )}
      <Prem />
    </div>
  );
};

export default ActiorPage;
