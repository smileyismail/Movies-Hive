import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MoviesCarousel = ({ movies }) => {
  return (
    <Box maxWidth="100vw">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
      >
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Box>
              <Box position="relative" maxHeight="80vh">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="poster"
                />
              </Box>
              <Box
                position="absolute"
                textAlign="start"
                left="1%"
                sx={{
                  bottom: { sm: "10%", xs: "1%" },
                  maxWidth: { sm: "60%", xs: "80%" },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                <Typography
                  sx={{
                    typography: { sm: "h3", xs: "h5" },
                    fontWeight: { sm: "bold", xs: "bold" },
                  }}
                >
                  {movie.title}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {"("}
                  {new Date(movie.release_date).getFullYear()}
                  {")"}
                </Typography>
                <Typography
                  sx={{
                    typography: { sm: "body1", xs: "caption" },
                  }}
                >
                  {movie.overview}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default MoviesCarousel;
