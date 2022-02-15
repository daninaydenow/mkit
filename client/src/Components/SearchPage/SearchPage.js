import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import moviesApi from "../../endPoints/moviesApi";
import serverApi from "../../endPoints/serverApi";
import ShowView from "../ShowView/ShowView";

const SearchPage = () => {
  const [showsState, setAllShows] = useState([]);
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
      .then((res) => res.json())
      .then((result) => {
        setAllShows(result);
      });
  }, [currentUser, favouritesNotEmpty]);

  const showsChekecForFavourites = JSON.parse(JSON.stringify(showsState));
  showsChekecForFavourites.map((x) => {
    if (favouritesState.includes(x.id.toString())) {
      x.isUserFavourite = true;
      return x;
    } else {
      x.isUserFavourite = false;
      return x;
    }
  });

  return (
    <Container>
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" style={{ margin: "1rem" }}>
          Search
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Search"
          placeholder="Search by movie title ..."
          multiline
          maxRows={4}
          // value={value}
          // onChange={handleChange}
        />
        <Button
          variant="outlined"
          color="success"
          style={{
            padding: "13px",
            marginInline: "1rem",
          }}
        >
          Search
        </Button>
      </Box>

      {showsChekecForFavourites.map((show) => (
        <ShowView key={show.id} props={show} />
      ))}
    </Container>
  );
};

export default SearchPage;
