import { Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const YourFavouritesCard = ({ id, image }) => {
  return (
    <Grid item xs={3}>
      <CardActionArea>
        <Card sx={{ maxHeight: "22.5rem" }}>
          <Link to={`/shows/${id}`}>
            <CardMedia
              component="img"
              height="100%"
              image={image?.medium}
              alt="..."
            />
          </Link>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default YourFavouritesCard;
