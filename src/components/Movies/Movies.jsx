import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Pagination, Stack, Box, Typography } from "@mui/material";

import MovieCard from "./MovieCard";

import MoviesCarousel from "./MoviesCarousel";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    setMovies([]);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=0fe916d3ae7e83cc87bd04d529b851cc&language=en-US&page=${page}`
      )
      .then(function (response) {
        // handle success
        setMovies(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [page, type]);

  function handlePageChange(event, value) {
    setPage(value);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minHeight="85vh"
      gap={4}
    >
      <MoviesCarousel movies={movies} />

      <Typography
        variant="h5"
        marginRight="auto"
        w="100%"
        fontWeight="bold"
        px={5}
        color="#E7E7E9"
      >
        {type === "now_playing" && "Now Playing"}
        {type === "upcoming" && "Up Coming"}
        {type === "popular" && "Popular"}
        {type === "top_rated" && "Top Rated"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </Box>

      <Stack mx="auto" width="100%">
        <Pagination
          count={50}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          size="medium"
          color="primary"
          sx={{ mx: "auto", bgcolor: "#415A77" }}
        />
      </Stack>
    </Box>
  );
};

export default Movies;
