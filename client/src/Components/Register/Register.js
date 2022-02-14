import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../helpers/validateForm";
import { useAuth } from "../../contexts/AuthContext";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@mui/material";

const initialValues = { username: "", email: "", password: "", rePassword: "" };

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const data = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };
      register(data)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setFormErrors({
              ...formErrors,
              email: "A user with the same email already exists!",
            });
          }
        });
    }
  }, [formErrors, isSubmit, formValues, navigate, register]);

  const registerHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form method="POST" onSubmit={registerHandler}>
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
        <FormControl sx={{ width: "350px", margin: ".5rem" }}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            type="text"
            aria-describedby="username"
            value={formValues.username}
            onChange={onChangeHandler}
          />
          <FormHelperText id="username">
            The name you'll be recognized with ...
          </FormHelperText>
        </FormControl>
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
        <FormControl sx={{ width: "350px", margin: ".5rem" }}>
          <InputLabel htmlFor="rePassword">Repeat Password</InputLabel>
          <Input
            id="rePassword"
            name="rePassword"
            type="password"
            aria-describedby="rePassword"
            value={formValues.rePassword}
            onChange={onChangeHandler}
          />
          <FormHelperText id="rePassword">
            We'll never share your password.
          </FormHelperText>
        </FormControl>
        <Button type="submit" sx={{ marginTop: "1rem" }}>
          Register
        </Button>
        <Typography sx={{ marginTop: "1rem" }}>
          Already have an account ?{" "}
        </Typography>
        <Link to="/login" style={{ marginTop: ".5rem" }}>
          Login
        </Link>
      </Container>
    </form>
  );
};

export default Register;
