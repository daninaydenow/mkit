import { Box, CardMedia, Card, Typography, Link, Button } from "@mui/material";

const ShowView = ({ props }) => {
  let premiered;
  let genres;
  if (props !== "") {
    premiered = props.premiered.split("-")[0];
    genres = props.genres.join(", ");
  }

  return (
    <Box marginY={"3rem"} sx={{ display: "flex", maxHeight: "30rem" }}>
      <Box>
        <Card sx={{ minHeight: "100%", maxHeight: "28rem", minWidth: "15rem" }}>
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={props.image?.medium}
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
          {props.name} ({premiered})
        </Typography>
        <Typography variant="body2" component="p">
          {genres} | {props.runtime} minutes
        </Typography>
        <Typography variant="body2" component="p">
          {props.summary}
        </Typography>
        <Link href={props.officialSite ? props.officialSite : ""}>
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
  );
};

export default ShowView;
