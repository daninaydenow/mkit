import { Box, Button, Typography } from "@mui/material";
const HeroSection = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        height: "300px",
      }}
    >
      <Box
        style={{
          margin: "30px",
        }}
      >
        <Typography variant="h4" component="h1">
          Welcome to Cinema Fanatics
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          style={{
            maxWidth: "400px",
          }}
        >
          Bingewatch all your favourite shows in one place. Explore from a vast
          selection of shows, just 1 click away ! Find your favourite show now !
        </Typography>
        <Button
          variant="contained"
          style={{
            margin: "20px",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
