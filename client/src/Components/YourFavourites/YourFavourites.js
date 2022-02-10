import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";

import api from "../../api";
import YourFavouritesCard from "./YourVafouritesCard";
import HeroSection from "./HeroSection";

const YourFavourites = () => {
  const [showsState, setShowsState] = useState([]);

  useEffect(() => {
    api
      .getAll()
      .then((response) => response.json())
      .then((res) => {
        setShowsState(res.slice(0, 40));
      });
  }, []);

  console.log(showsState);

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
          Your Favourites
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 4 }}
          className="main-container"
        >
          {showsState.map((x) => (
            <YourFavouritesCard key={x.id} {...x} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default YourFavourites;
