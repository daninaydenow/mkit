import { Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import api from "../../api";

const YourFavouritesCard = ({ ...props }) => {
  return (
    <Grid item xs={3} elevated={3}>
      <Card sx={{ maxHeight: "22.5rem" }}>
        <CardActionArea>
          <Link to={`${api.baseUrl}/${props.id}`}>
            <CardMedia
              component="img"
              height="100%"
              image={props.image.medium}
              alt="..."
            />
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default YourFavouritesCard;
