import React from "react";
import { useState } from "react";

import MoviesList from "../components/Movies/MoviesList";

import {
  fetchMovieGenresList,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../utils/api";
import { useEffect } from "react";

const LandingPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [genresList, setGenresList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpComingMovies();
    getTopRatedMovies();
    getPopularMovies();
    getMovieGenreList();
  }, []);

  async function getUpComingMovies() {
    setLoading(true);
    const data = await fetchUpcomingMovies();
    if (data && data.results) {
      setUpcomingMovies(data.results);
    } else {
      console.log("Movies not found");
    }
    setLoading(false);
  }

  async function getTopRatedMovies() {
    setLoading(true);
    const data = await fetchTopRatedMovies();
    if (data && data.results) {
      setTopRatedMovies(data.results);
    } else {
      console.log("Movies not found");
    }
    setLoading(false);
  }

  async function getPopularMovies() {
    setLoading(true);
    const data = await fetchPopularMovies();
    if (data && data.results) {
      setPopularMovies(data.results);
    } else {
      console.log("Movies not found");
    }
    setLoading(false);
  }

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

  return (
    <div>
      <MoviesList
        title="Upcoming Movies"
        movies={upcomingMovies}
        genresList={genresList}
        loading={loading}
      />
      <MoviesList
        title="Popular Movies"
        movies={popularMovies}
        genreList={genresList}
        loading={loading}
      />
      <MoviesList
        title="Top-Rated Movies"
        movies={topRatedMovies}
        genresList={genresList}
        loading={loading}
      />
    </div>
  );
};

export default LandingPage;
