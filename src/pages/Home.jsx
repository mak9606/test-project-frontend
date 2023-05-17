import React from "react";
import { styled } from "@mui/system";
import { Container, Typography, Button, Grid } from "@mui/material";

const WelcomeContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const WelcomeTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

const WelcomeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Home = () => {
  return (
    <WelcomeContainer maxWidth="md">
      <WelcomeTitle variant="h3" component="h1">
        Welcome to our website!
      </WelcomeTitle>
      <Typography variant="subtitle1" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in turpis
        sapien. Nunc eu magna leo. In hac habitasse platea dictumst. Aliquam
        volutpat lacus non scelerisque.
      </Typography>
      <Grid container justifyContent="center">
        <Grid item>
          <WelcomeButton variant="contained" color="primary">
            Get Started
          </WelcomeButton>
        </Grid>
      </Grid>
    </WelcomeContainer>
  );
};

export default Home;
