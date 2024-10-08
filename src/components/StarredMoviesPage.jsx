// src/pages/StarredMoviesPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const StarredMoviesPage = () => {
  const [starredMovies, setStarredMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load starred movies from localStorage
    const savedStarredMovies =
      JSON.parse(localStorage.getItem("starredMovies")) || [];
    setStarredMovies(savedStarredMovies);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-4xl font-bold font-poppins ">
          Starred Movies
        </h1>
        <button
          onClick={() => navigate("/")}
          className=" bg-black text-white px-4 py-2 rounded-lg font-poppins hover:font-bold"
        >
          Back to Search
        </button>
      </div>

      {starredMovies.length === 0 ? (
        <p className="font-poppins">You have not starred any movies yet.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {starredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarredMoviesPage;
