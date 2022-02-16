import { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Card,
  Typography,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import serverApi from "../../endPoints/serverApi";

const ShowView = ({ show }) => {
  const [isFavourite, setFavourite] = useState(undefined);
  const { currentUser } = useAuth();
  useEffect(() => {
    setFavourite(show.isUserFavourite);
  }, [show.isUserFavourite]);

  let premiered;
  let genres;
  if (show !== "") {
    premiered = show.premiered !== null ? show.premiered.split("-")[0] : "";
    genres = show.genres !== null ? show.genres.join(", ") : "";
  }

  const addToFavouritesHandler = (e) => {
    serverApi
      .addToFavourites(show.id, currentUser.token)
      .then((res) => res.json())
      .then((result) => {
        setFavourite(true);
      })
      .catch((err) => console.log(err));
  };

  const removeFromFavouritesHandler = (e) => {
    serverApi
      .removeFromFavourites(show.id, currentUser.token)
      .then((res) => res.json())
      .then((result) => {
        setFavourite(false);
      })
      .catch((err) => console.log(err));
  };

  const addToFavouritesBtn = (
    <Button
      variant="outlined"
      color="success"
      style={{ maxWidth: "12rem", padding: "0.75rem" }}
      onClick={addToFavouritesHandler}
    >
      Add to favourites
    </Button>
  );

  const removeFromFavouritesBtn = (
    <Button
      variant="outlined"
      color="error"
      style={{ maxWidth: "12rem", padding: "0.75rem" }}
      onClick={removeFromFavouritesHandler}
    >
      Remove from favourites
    </Button>
  );

  return (
    <Box marginY={"3rem"} sx={{ display: "flex", maxHeight: "30rem" }}>
      <Box>
        <Card sx={{ minHeight: "100%", maxHeight: "28rem", minWidth: "15rem" }}>
          <CardActionArea>
            <Link to={`/shows/${show.id}`}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={show.image?.medium}
                alt="show poster"
              />
            </Link>
          </CardActionArea>
        </Card>
      </Box>
      <Box
        maxHeight={"30rem"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "2rem",
        }}
      >
        <Link
          to={`/shows/${show.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="h4" component="h1">
            {show.name} ({premiered})
          </Typography>
        </Link>
        <Typography variant="body2" component="p">
          {genres} | {show.runtime} minutes
        </Typography>
        <Typography variant="body2" component="p">
          {show.summary}
        </Typography>
        <Link to={show.officialSite ? show.officialSite : ""}>
          Visit official Site
        </Link>
        {currentUser
          ? isFavourite
            ? removeFromFavouritesBtn
            : addToFavouritesBtn
          : ""}
      </Box>
    </Box>
  );
};

export default ShowView;
