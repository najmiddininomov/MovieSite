import React, { useState } from "react";
import "./Search.scss";
import Api_Service from "../../Service/Service_Api";
import { Link } from "react-router-dom";

const Search = () => {
  const [value, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState("multi");

  const SearchData = async (e) => {
    e.preventDefault();

    if (value.trim() === "") return;

    try {
      const responmovie = await Api_Service.getData(
        `/search/${category}?query=${value.trim()}`
      );
      setResults(responmovie.data.results);
      console.log(responmovie.data.results);
    } catch (error) {
      console.error("Qidirishda xatolik:", error);
    }
  };
  // function handleclich (){
  //   if(input.length == 0){
  //     console.log('fuck');

  //   }
  // }

  return (
    <div className="Search">
      <div className="container">
        <form onSubmit={SearchData} className="search-form">
          <input
            type="text"
            placeholder="Search movies..."
            value={value}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="sorts">
          <button
            className={`sorts-btns ${category === "multi" ? "active" : ""}`}
            onClick={() => setCategory("multi")}
          >
            All
          </button>
          <button
            className={`sorts-btns ${category === "tv" ? "active" : ""}`}
            onClick={() => setCategory("tv")}
          >
            TV
          </button>
          <button
            className={`sorts-btns ${category === "movie" ? "active" : ""}`}
            onClick={() => setCategory("movie")}
          >
            Movie
          </button>
          <button
            className={`sorts-btns ${category === "person" ? "active" : ""}`}
            onClick={() => setCategory("person")}
          >
            Actor
          </button>
        </div>

        <div className="search-results">
          {results && results.length > 0 ? (
            results.map((movie) => (
              <Link
                to={
                  category === "person"
                    ? `/Actior/${movie.id}`
                    : `/Inside/${movie.id}`
                }
              >
                <div className="movie-card">
                  <img
                    src={
                      movie.poster_path || movie.profile_path
                        ? `https://image.tmdb.org/t/p/w500${
                            movie.poster_path || movie.profile_path
                          }`
                        : "https://via.placeholder.com/300x450?text=No+Image"
                    }
                    alt={movie.title || movie.name}
                  />
                  <h4>{movie.title || movie.name}</h4>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ marginTop: "20px", color: "#ccc" }}>
              Hech narsa topilmadi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
