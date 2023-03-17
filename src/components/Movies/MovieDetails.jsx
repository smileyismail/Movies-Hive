import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Box, Stack, Typography, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import MovieCard from "./MovieCard";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setDetails({});
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0fe916d3ae7e83cc87bd04d529b851cc&language=en-US&append_to_response=similar`
      )
      .then(function (response) {
        // handle success
        setDetails(response.data);
        setSimilar(response.data.similar.results);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id]);

  return (
    <Box>
      <Box>
        <Box sx={{ maxHeight: "70vh", overflow: "hidden" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${
              details && details.backdrop_path
            }`}
            alt={details.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Stack
          direction="row"
          maxWidth="80vw"
          mx="auto"
          spacing={2}
          sx={{
            transform: "translate(0px,-200px)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box>
            <img
              src={`https://image.tmdb.org/t/p/original${
                details && details.poster_path
              }`}
              alt={details.title}
              style={{
                maxWidth: "240px",
                minWidth: "240px",
              }}
            />
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h4" fontWeight="bold">
              {details.title}
            </Typography>
            <Typography>{details.tagline}</Typography>
            <Typography variant="body2" display="flex" alignItems="center">
              {details.vote_average}
              <StarIcon fontSize="small" style={{ color: "gold" }} />
              {"("}
              {details.vote_count}
              {")"} votes
            </Typography>
            <Typography variant="body2">{details.runtime} mins</Typography>
            <Typography variant="body2">
              Release Date : {details.release_date}
            </Typography>

            <Box>
              {genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  size="small"
                  sx={{ mr: 1, color: "#E7E7E9", border: "1px solid #E7E7E9 " }}
                />
              ))}
            </Box>

            <Typography variant="h6" fontWeight="bold">
              Overview <Typography>{details.overview}</Typography>
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Typography
        variant="h5"
        marginRight="auto"
        w="100%"
        fontWeight="bold"
        px={5}
        mb={4}
        color="#E7E7E9"
      >
        Similar Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {similar.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default MovieDetails;
