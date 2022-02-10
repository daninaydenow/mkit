import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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

  return (
    <>
      <HeroSection />
      <Container>
        <Grid container spacing={5}>
          {showsState.map((x) => (
            <YourFavouritesCard key={x.id} {...x} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default YourFavourites;
