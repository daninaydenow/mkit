import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

import moviesApi from "../../endPoints/moviesApi";
import serverApi from "../../endPoints/serverApi";
import YourFavouritesCard from "./YourVafouritesCard";
import HeroSection from "./HeroSection";

const YourFavourites = () => {
  const [showsState, setShowsState] = useState([]);
  const [favouritesState, setFavouritesState] = useState([]);
  const { currentUser } = useAuth();
  const favouritesNotEmpty = favouritesState.length === 0;
  useEffect(() => {
    if (currentUser && favouritesNotEmpty) {
      serverApi
        .getFavourites(currentUser.token)
        .then((res) => res.json())
        .then((result) => {
          setFavouritesState(result.map((x) => x.movieId));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    moviesApi
      .getAll()
      .then((response) => response.json())
      .then((result) => {
        setShowsState(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser, favouritesNotEmpty]);

  const myFavouritesPopulated = [];
  favouritesState.forEach((id) => {
    myFavouritesPopulated.push(
      showsState.filter((show) => show.id.toString() === id.toString())[0]
    );
  });

  return (
    <>
      <HeroSection />
      <Container>
        <Typography
          variant="h3"
          component="h1"
          textAlign={"center"}
          marginY={"2rem"}
        >
          {currentUser
            ? currentUser.username + "'s Favourites"
            : "Register or login to see your favourites !"}
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 4 }}
          className="main-container"
        >
          {favouritesState
            ? myFavouritesPopulated.map((x) => (
                <YourFavouritesCard key={x.id} {...x} />
              ))
            : ""}
        </Grid>
      </Container>
    </>
  );
};

export default YourFavourites;
