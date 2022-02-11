import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import api from "../../api";
import ShowView from "../ShowView/ShowView";

const DetailsPage = () => {
  const [currentShow, setCurrentShow] = useState("");
  const { showId } = useParams();

  useEffect(() => {
    api
      .getOne(showId)
      .then((res) => res.json())
      .then((result) => {
        setCurrentShow(result);
      });
  }, [showId]);

  const removeFromFavouritesBtn = (
    <Button
      variant="outlined"
      color="error"
      style={{ maxWidth: "12rem", padding: "0.75rem" }}
    >
      Remove From Favourites
    </Button>
  );

  return (
    <Container>
      <ShowView props={currentShow} />
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
