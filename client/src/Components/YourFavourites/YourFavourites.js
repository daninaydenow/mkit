import { useEffect, useState } from "react";
import api from "../../api";
import Grid from "@mui/material/Grid";
import YourFavouritesCard from "./YourVafouritesCard";
import Container from "@mui/material/Container";

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
    <Container>
      <Grid container spacing={5}>
        {showsState.map((x) => (
          <YourFavouritesCard key={x.id} {...x} />
        ))}
      </Grid>
    </Container>
  );
};

export default YourFavourites;
