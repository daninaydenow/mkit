import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const [searchState, setSearchState] = useState("");
  const { currentUser } = useAuth();

  const searchStateHandler = (e) => {
    const currentSearchValue = e.target.value;
    return setSearchState(currentSearchValue);
  };

  const searchHandler = (e) => {
    console.log(searchState);
    // return setSearchState("");
  };

  const userButtons = (
    <Link
      to="/logout"
      style={{
        textDecoration: "none",
        color: "white",
        paddingInline: ".5rem",
      }}
    >
      Logout
    </Link>
  );

  const guestButtons = (
    <>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "white",
          paddingInline: ".5rem",
        }}
      >
        Login
      </Link>
      <Link
        to="/register"
        style={{
          textDecoration: "none",
          color: "white",
          paddingInline: ".5rem",
        }}
      >
        Register
      </Link>
    </>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Cinema Fanatics
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              name="search"
              value={searchState}
              onChange={searchStateHandler}
            />
          </Search>
          <Button
            style={{
              backgroundColor: "white",
              paddingInline: "2rem",
              marginInline: "1rem",
            }}
            onClick={searchHandler}
          >
            Search
          </Button>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              paddingInline: ".5rem",
            }}
          >
            Home
          </Link>
          {currentUser ? userButtons : guestButtons}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
