import { useEffect, useState } from "react";
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import api from "../../api";
import ShowView from "../ShowView/ShowView";

const SearchPage = () => {
  const [shows, setAllShows] = useState([]);

  useEffect(() => {
    api
      .getAll()
      .then((res) => res.json())
      .then((result) => {
        setAllShows(result.slice(0, 40));
      });
  }, []);

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

      {shows.map((show) => (
        <ShowView key={show.id} props={show} />
      ))}
    </Container>
  );
};

export default SearchPage;
