import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
        backgroundColor: "#bfdbf7",
      }}
    >
      <Box
        style={{
          margin: "30px",
          textAlign: "start",
        }}
        className="hero-heading-box"
      >
        <Typography variant="h4" component="h1">
          Welcome to Cinema Fanatics
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          style={{
            maxWidth: "400px",
            marginBlockEnd: "20px",
          }}
        >
          Bingewatch all your favourite shows in one place. Explore from a vast
          selection of comedies, drama, horror or sci-fi! Just one click away !
          Find your favourite show now !
        </Typography>
        <Link
          to="/search"
          variant="contained"
          style={{
            textDecoration: "none",
            color: "#42a5f5",
            backgroundColor: "white",
            borderRadius: "10px",
            paddingInline: "1rem",
            paddingBlock: ".5rem",
          }}
        >
          Search
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
