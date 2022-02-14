import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
        marginTop: "7rem",
      }}
    >
      <Typography variant="h4" component="h1">
        Register
      </Typography>
      <FormControl sx={{ width: "350px" }}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" name="username" aria-describedby="username" />
        <FormHelperText id="username">
          The name you'll be recognized with ...
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ width: "350px" }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" name="email" aria-describedby="email" />
        <FormHelperText id="email">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ width: "350px" }}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" name="password" aria-describedby="password" />
        <FormHelperText id="password">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button sx={{ marginTop: "1rem" }}>Register</Button>
      <Typography sx={{ marginTop: "1rem" }}>
        Already have an account ?{" "}
      </Typography>
      <Link to="/login" style={{ marginTop: ".5rem" }}>
        Login
      </Link>
    </Container>
  );
};

export default Register;
