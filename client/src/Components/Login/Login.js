import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@mui/material";
import { validate } from "../../helpers/validateForm";
import { useAuth } from "../../contexts/AuthContext";

const initialFormValues = { email: "", password: "" };
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const data = { email: formValues.email, password: formValues.password };
      login(data)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setFormErrors({
            ...formErrors,
            password: "Incorrect username or password!",
          });
        });
    }
  }, [formErrors, isSubmit, formValues, login, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form method="POST" onSubmit={loginHandler}>
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
          Login
        </Typography>
        <FormControl sx={{ width: "350px", margin: ".5rem" }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            aria-describedby="email"
            value={formValues.email}
            onChange={onChangeHandler}
          />
          <FormHelperText id="email">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ width: "350px", margin: ".5rem" }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            aria-describedby="password"
            value={formValues.password}
            onChange={onChangeHandler}
          />
          <FormHelperText id="password">
            We'll never share your password.
          </FormHelperText>
        </FormControl>
        <Button type="submit" sx={{ marginTop: "1rem" }}>
          Login
        </Button>
        <Typography sx={{ marginTop: "1rem" }}>
          Don't have an account ?
        </Typography>
        <Link to="/register" style={{ marginTop: ".5rem" }}>
          Register
        </Link>
      </Container>
    </form>
  );
};

export default Login;
