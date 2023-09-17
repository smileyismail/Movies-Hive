import React from "react";

import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies, genresList }) => {
  return (
    <div className="my-4 mb-16">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <button className="bg-accent font-bold p-1.5 rounded-md">
          See All
        </button>
      </div>

      <div>
        <ul className="flex justify-start items-center overflow-x-auto scrollbar-hide">
          {movies?.map((movie, index) => (
            <li
              key={index}
              style={{ alignSelf: "normal" }}
              className="mr-4 hover:scale-95 transition-all duration-200"
            >
              <MovieCard movie={movie} genresList={genresList} title={title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
