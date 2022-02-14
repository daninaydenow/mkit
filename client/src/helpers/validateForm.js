export const validate = (values) => {
  const errors = {};
  // validates register form fields
  if (values.hasOwnProperty("rePassword")) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email adress!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password cannot be less than 6 characters!";
    }
    if (!values.rePassword) {
      errors.rePassword = "Confirmation is required!";
    } else if (values.password !== values.rePassword) {
      errors.rePassword = "Passwords don't match!";
    }
    if (!values.username) {
      errors.username = "You must enter a username!";
    }
  }
  // validates login form fields
  if (values.hasOwnProperty("password")) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }
  }

  return errors;
};
