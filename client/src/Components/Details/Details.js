import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  CardMedia,
  Card,
  Typography,
  Link,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import api from "../../api";

const Details = () => {
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

  console.log(currentShow);
  let premiered;
  let genres;

  if (currentShow !== "") {
    premiered = currentShow.premiered.split("-")[0];
    genres = currentShow.genres.join(", ");
  }

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
      <Box marginY={"3rem"} sx={{ display: "flex", maxHeight: "30rem" }}>
        <Box>
          <Card
            sx={{ minHeight: "100%", maxHeight: "28rem", minWidth: "15rem" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={currentShow.image?.medium}
              alt="..."
            />
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
          <Typography variant="h4" component="h1">
            {currentShow.name} ({premiered})
          </Typography>
          <Typography variant="body2" component="p">
            {genres} | {currentShow.runtime} minutes
          </Typography>
          <Typography variant="subtitle1" component="p">
            {currentShow.summary}
          </Typography>
          <Link href={currentShow.officialSite ? currentShow.officialSite : ""}>
            Visit official Site
          </Link>
          <Button
            variant="outlined"
            color="success"
            style={{ maxWidth: "12rem", padding: "0.75rem" }}
          >
            Add to favourites
          </Button>
        </Box>
      </Box>
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

export default Details;
