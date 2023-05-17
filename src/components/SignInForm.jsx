import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import ROUTES from "../settings/Routes";

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

const SignInForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleFormSubmit = (values) => {
    // Implement your login/signup logic here
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Don't have an account?{" "}
              <Link to={ROUTES.SIGNUP} style={useStyles.link}>
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignInForm;
