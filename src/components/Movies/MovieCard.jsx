import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Chip,
  Box,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function MovieCard({ movieData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const { id, poster_path, title, release_date, vote_average } = movieData;

  const releaseYear = useMemo(
    () => new Date(release_date).getFullYear(),
    [release_date]
  );

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={260}
          height={360}
        />
      ) : (
        <Card
          sx={{
            maxWidth: "240px",
            minWidth: "240px",
            textAlign: "center",
            bgcolor: "#172e47",
          }}
        >
          <Link
            to={`/movie/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box position="relative">
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
                <Chip
                  icon={<StarIcon style={{ color: "gold" }} />}
                  label={vote_average}
                  size="small"
                  sx={{
                    color: "gold",
                    bgcolor: "gray",
                    border: "1px solid gold",
                    borderRadius: 1,
                    fontWeight: "bolder",
                    position: "absolute",
                    left: 2,
                    bottom: 4,
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "100%",
                  color: "#E7E7E9",
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="caption">({releaseYear})</Typography>
                <Button
                  variant="contained"
                  component="div"
                  size="small"
                  sx={{ marginTop: "auto", bgcolor: "#415A77" }}
                >
                  View more
                </Button>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      )}
    </>
  );
}

export default MovieCard;
