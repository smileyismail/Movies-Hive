import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import {
  fetchMovieGenresList,
  fetchPopularMovies,
  fetchSearchMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../utils/api";
import MovieCard from "../components/Movies/MovieCard";

const MoviesPage = () => {
  const { type } = useParams();

  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies(page) {
      setLoading(true);
      let data;
      switch (type) {
        case "Upcoming Movies":
          data = await fetchUpcomingMovies(page);
          break;
        case "Popular Movies":
          data = await fetchPopularMovies(page);
          break;
        case "Top-Rated Movies":
          data = await fetchTopRatedMovies(page);
          break;
        default:
          data = await fetchSearchMovies({ query: type, include_adult: true });
      }

      if (data && data.results) {
        setData(data);
      } else {
        console.log("Movies not found");
      }
      setLoading(false);
    }
    getMovies(page);
  }, [type, page]);

  useEffect(() => {
    getMovieGenreList();
  }, []);

  async function getMovieGenreList() {
    setLoading(true);
    const data = await fetchMovieGenresList();
    if (data && data.genres) {
      setGenresList(data.genres);
    } else {
      console.log("Genres not found");
    }
    setLoading(false);
  }

  const pageChangeHandler = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-4 pl-6">
        {type}{" "}
        <span className="text-base text-neutral-400 font-normal">
          ({data.total_results})
        </span>
      </h1>
      <ul className="flex flex-wrap justify-center items-center">
        {data.results?.map((item, index) => (
          <li
            key={index}
            style={{ alignSelf: "normal" }}
            className="m-4 hover:scale-95 transition-all duration-200"
          >
            <MovieCard
              movie={item}
              genresList={genresList}
              title={type}
              loading={loading}
            />
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center mt-6">
        <Pagination
          count={data.total_pages}
          page={page}
          onChange={pageChangeHandler}
          shape="rounded"
          size="medium"
          color="primary"
          className="bg-secondary p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default MoviesPage;
