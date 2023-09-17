import React, { useEffect, useState } from "react";
import { fetchImage500 } from "../../utils/api";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, genresList, title, loading }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", getWindowSizeHandler);

    return () => {
      window.removeEventListener("resize", getWindowSizeHandler);
    };
  }, [windowDimensions]);

  const matchedArray = movie.genre_ids.map((id) => {
    const matchedObject = genresList?.find((genre) => genre.id === id);
    return matchedObject || null;
  });

  const getWindowSizeHandler = () => {
    setWindowDimensions((prevState) => {
      return {
        ...prevState,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  };

  let dynamicContent = {
    name: title,
    value: movie.vote_average,
  };

  switch (title) {
    case "Upcoming Movies":
      dynamicContent = {
        name: "Release Date :",
        value: movie.release_date,
      };
      break;
    case "Popular Movies":
      dynamicContent = {
        name: "Popularity :",
        value: movie.popularity,
      };
      break;
    case "Top-Rated Movies":
      dynamicContent = {
        name: "Ratings :",
        value: movie.vote_average.toFixed(1),
      };
      break;
    default:
      dynamicContent = {
        name: "Ratings :",
        value: movie.vote_average.toFixed(1),
      };
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <section
        style={{
          maxWidth:
            windowDimensions.width * 0.5 > 260
              ? 220
              : windowDimensions.width * 0.5,
        }}
        className="flex flex-col h-full gap-2 bg-secondary rounded-md"
      >
        <img
          src={fetchImage500(movie?.poster_path)}
          alt="movie"
          style={{
            maxWidth:
              windowDimensions.width * 0.5 > 280
                ? 260
                : windowDimensions.width * 0.5,
          }}
          className={`drop-shadow-2xl object-cover rounded-t-md`}
        />

        <div className="px-2 flex flex-col gap-2">
          <h3 className="font-semibold text-center text-xl">
            {movie?.original_title.length > 22
              ? movie?.original_title.slice(0, 22) + "..."
              : movie?.original_title}
          </h3>

          <div className="flex justify-center items-center gap-1">
            {matchedArray.slice(0, 3).map((item, index) => {
              let showDot = index + 1 !== movie.genre_ids.slice(0, 3).length;
              return (
                <p key={index} className="text-neutral-400 text-xs">
                  {item?.name}
                  {showDot ? " /" : ""}
                </p>
              );
            })}
          </div>

          <div className="flex justify-center items-center bg-neutral-700 rounded-md">
            <h3 className="text-neutral-400 text-sm">
              {dynamicContent.name}&nbsp;
            </h3>
            <h3 className="text-sm"> {dynamicContent.value}&nbsp;</h3>
          </div>

          <p className="text-center text-neutral-300">
            {movie?.overview.length > 50
              ? movie?.overview.slice(0, 50) + "..."
              : movie?.overview}
          </p>
        </div>

        <button className="bg-accent w-full font-bold p-1.5 rounded-b-md mt-auto">
          View More
        </button>
      </section>
    </Link>
  );
};

export default MovieCard;
