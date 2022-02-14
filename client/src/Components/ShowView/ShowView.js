import {
  Box,
  CardMedia,
  Card,
  Typography,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ShowView = ({ props }) => {
  const { currentUser } = useAuth();
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
          <CardActionArea>
            <Link to={`/shows/${props.id}`}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={props.image?.medium}
                alt="..."
              />
            </Link>
          </CardActionArea>
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
        <Link
          to={`/shows/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="h4" component="h1">
            {props.name} ({premiered})
          </Typography>
        </Link>
        <Typography variant="body2" component="p">
          {genres} | {props.runtime} minutes
        </Typography>
        <Typography variant="body2" component="p">
          {props.summary}
        </Typography>
        <Link to={props.officialSite ? props.officialSite : ""}>
          Visit official Site
        </Link>
        {currentUser ? (
          <Button
            variant="outlined"
            color="success"
            style={{ maxWidth: "12rem", padding: "0.75rem" }}
          >
            Add to favourites
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default ShowView;
