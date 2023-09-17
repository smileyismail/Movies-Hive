import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchImage500, fetchMovieDetails } from "../utils/api";
import { useEffect } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const [loading, setLoading] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      const data = await fetchMovieDetails(id);
      if (data) {
        setMovie(data);
      } else {
        console.log("Movie not Found");
      }
      setLoading(false);
    }
    getMovieDetails();
  }, [id]);

  useEffect(() => {
    window.addEventListener("resize", getWindowSizeHandler);

    return () => {
      window.removeEventListener("resize", getWindowSizeHandler);
    };
  }, [windowDimensions]);

  const getWindowSizeHandler = () => {
    setWindowDimensions((prevState) => {
      return {
        ...prevState,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  };

  console.log(movie);
  console.log(loading);

  return (
    <div className="h-screen">
      <div className="relative">
        <img
          src={fetchImage500(movie?.backdrop_path)}
          alt="backdrop"
          style={{ maxHeight: windowDimensions.height * 0.5 }}
          className="w-screen object-cover"
        />
        <div className="absolute -bottom-[30%] left-[10%] flex justify-center items-center gap-4">
          <img
            src={fetchImage500(movie?.poster_path)}
            alt="movie"
            className={`max-w-[220px] drop-shadow-2xl object-cover rounded-t-md`}
          />

          <div>
            <h1 className="text-2xl font-bold">
              Name : {movie?.original_title}
            </h1>
            <div className="flex gap-1 text-base text-neutral-300">
              Genres :
              {movie.genres.map((item, index) => {
                let showDot = index + 1 !== movie?.genres.slice(0, 3).length;
                return (
                  <p key={index}>
                    {item?.name}
                    {showDot ? " /" : ""}
                  </p>
                );
              })}
            </div>
            <p className="text-base text-neutral-300">
              Ratings : {movie?.vote_average.toFixed(1)}
            </p>
            <p className="text-base text-neutral-300">
              Popularity : {movie?.popularity}
            </p>

            <p className="text-base text-neutral-300">
              Overview : {movie?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
