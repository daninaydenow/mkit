import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Container,
  Box,
  Typography,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import moviesApi from "../../endPoints/moviesApi";
import serverApi from "../../endPoints/serverApi";
import ShowView from "../ShowView/ShowView";

const DetailsPage = () => {
  const [currentShow, setCurrentShow] = useState("");
  const [favouritesState, setFavouritesState] = useState([]);
  const { currentUser } = useAuth();
  const { showId } = useParams();

  useEffect(() => {
    // get user favourites
    if (currentUser && favouritesState.length === 0) {
      serverApi
        .getFavourites(currentUser.id, currentUser.token)
        .then((res) => res.json())
        .then((result) => {
          setFavouritesState(result.map((x) => x.movieId));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // get specific show
    moviesApi
      .getOne(showId)
      .then((res) => res.json())
      .then((result) => {
        setCurrentShow(result);
      });
  }, [showId, currentUser, favouritesState.length === 0]);

  // check if current show is user favourite
  const modifiedSow = currentShow;
  if (favouritesState.includes(currentShow.id.toString())) {
    modifiedSow.isUserFavourite = true;
  } else {
    modifiedSow.isUserFavourite = false;
  }

  return (
    <Container>
      <ShowView props={modifiedSow} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "2rem",
          height: "16rem",
        }}
      >
        <Typography variant="h4" component="h1">
          Your Review
        </Typography>
        <Rating
          name="simple-controlled"
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Personal Comments and notes"
          multiline
          rows={4}
        />
      </Box>
    </Container>
  );
};

export default DetailsPage;
