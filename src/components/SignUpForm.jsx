import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import ROUTES from "../settings/Routes";
import { register } from "../api/public/users";
import { toast } from "react-toastify";

const FormWrapper = styled(Form)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const useStyles = {
  error: {
    color: "red",
  },
  link: {
    color: "#556cd6",
    textDecoration: "none",
  },
};

const SignUpForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleFormSubmit = async (values) => {
    const response = await register(values.name, values.email, values.password);
    if (response.status === 201) {
      toast.success("User Account created Successfully");

      navigate(ROUTES.HOME);
    } else {
      if (response.statusCode === 400) {
        toast.error(response.message);
      } else {
        toast.error("Sign Up Failed");
      }
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Field
            as={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            helperText={
              <ErrorMessage
                name="name"
                component="span"
                style={useStyles.error}
              />
            }
          />
          <Field
            as={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={
              <ErrorMessage
                name="email"
                component="span"
                style={useStyles.error}
              />
            }
          />
          <Field
            as={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={
              <ErrorMessage
                name="password"
                component="span"
                style={useStyles.error}
              />
            }
          />
          <Field
            as={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            helperText={
              <ErrorMessage
                name="confirmPassword"
                component="span"
                style={useStyles.error}
              />
            }
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?
              <Link style={useStyles.link} to={ROUTES.HOME}>
                {" "}
                Sign In
              </Link>
            </Grid>
          </Grid>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUpForm;
