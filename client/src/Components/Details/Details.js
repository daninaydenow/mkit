import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, CardMedia, Card, Typography } from "@mui/material";
import api from "../../api";

const Details = () => {
  const [currentShow, setCurrentShow] = useState({});
  const { showId } = useParams();

  const premiered = currentShow.premiered.split("-")[0];
  const genres = currentShow.genres.join(", ");

  useEffect(() => {
    api
      .getOne(showId)
      .then((res) => res.json())
      .then((result) => {
        setCurrentShow(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showId]);

  return (
    <Container>
      <Box marginY={"5rem"} sx={{ display: "flex", maxHeight: "30rem" }}>
        <Box>
          <Card sx={{ maxHeight: "30rem", minWidth: "10rem" }}>
            <CardMedia
              component="img"
              height="100%"
              image={currentShow.image.medium}
              alt="..."
            />
          </Card>
        </Box>
        <Box maxHeight={"30rem"} paddingX={"3rem"}>
          <Typography variant="h4" component="h1" paddingBottom={"2rem"}>
            {currentShow.name} ({premiered})
          </Typography>
          <Typography variant="body2" component="p" paddingBottom={"1rem"}>
            {genres} | {currentShow.runtime} minutes
          </Typography>
          <Typography variant="subtitle1" component="p">
            {currentShow.summary}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
