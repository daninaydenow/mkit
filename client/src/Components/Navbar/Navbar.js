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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import moviesApi from "../../endPoints/moviesApi";

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
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const showName = formData.get("search");
    console.log(typeof showName.trim());
    if (showName.trim() === "") {
      return;
    }
    if (typeof showName.trim() !== "string") {
      return;
    }
    moviesApi
      .search(showName.trim())
      .then((res) => res.json())
      .then((shows) => {
        if (shows.length === 0) {
          navigate("/search", { state: { message: "No shows to show" } });
        }
        navigate("/search", { state: shows });
      });
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
          <form style={{ display: "flex" }} onSubmit={submitHandler}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="search"
              />
            </Search>

            <Button
              style={{
                backgroundColor: "white",
                paddingInline: "2rem",
                marginInline: "1rem",
              }}
              type="submit"
            >
              Search
            </Button>
          </form>
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
