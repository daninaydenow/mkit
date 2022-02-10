import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const YourFavouritesCard = ({ ...props }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img className="movie-card-img" src={props.image.medium} alt="img" />
      </Paper>
    </Grid>
  );
};

export default YourFavouritesCard;
