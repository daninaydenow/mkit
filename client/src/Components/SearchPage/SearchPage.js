import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import moviesApi from "../../endPoints/moviesApi";
import serverApi from "../../endPoints/serverApi";
import ShowView from "../ShowView/ShowView";

const SearchPage = () => {
  const [favouritesState, setFavouritesState] = useState([]);
  const favouritesNotEmpty = favouritesState.length === 0;
  const { currentUser } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

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
  }, [currentUser, favouritesNotEmpty]);
  let showsChekecForFavourites;
  if (state) {
    let shows = state.map((x) => x.show);
    showsChekecForFavourites = JSON.parse(JSON.stringify(shows));
    console.log(shows);
    showsChekecForFavourites.map((x) => {
      if (favouritesState.includes(x.id.toString())) {
        x.isUserFavourite = true;
        return x;
      } else {
        x.isUserFavourite = false;
        return x;
      }
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const showName = formData.get("search");
    if (showName.trim() === "") {
      return;
    }
    if (typeof showName.trim() !== "string") {
      return;
    }
    moviesApi
      .search(showName.trim())
      .then((res) => res.json())
      .then((shows) => {
        if (shows.length === 0) {
          navigate("/search", { state: { message: "No shows to show" } });
        }
        navigate("/search", { state: shows });
      });
  };

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
        <form onSubmit={submitHandler}>
          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            placeholder="Search by movie title ..."
            name="search"
            multiline
            maxRows={4}
          />
          <Button
            type="submit"
            variant="outlined"
            color="success"
            style={{
              padding: "13px",
              marginInline: "1rem",
            }}
          >
            Search
          </Button>
        </form>
      </Box>

      {showsChekecForFavourites ? (
        showsChekecForFavourites.map((x) => <ShowView key={x.id} show={x} />)
      ) : (
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", marginTop: "3rem" }}
        >
          No shows to display
          <Typography variant="subtitle1" component="p">
            Use the search bar above to view shows...
          </Typography>
        </Typography>
      )}
    </Container>
  );
};

export default SearchPage;
