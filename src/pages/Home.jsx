import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useAuth } from "../context/auth.context";
import { getUserProfile } from "../api/private/users";
import { toast } from "react-toastify";

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

const LogoutButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Home = () => {
  const { logoutUser, userId } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const response = await getUserProfile(userId);
    if (response?.status === 200) {
      setUserData(response.data);
    } else {
      if (response?.statusCode === 404) {
        toast.error(response?.message);
      } else {
        toast.error("User Data Fetch Failed");
      }
    }
  };
  const handleLogout = async () => {
    localStorage.removeItem("Access_Token");
    localStorage.removeItem("userId");
    logoutUser();
  };
  console.log(userData, "v");
  return (
    <WelcomeContainer maxWidth="md">
      <WelcomeTitle variant="h3" component="h1">
        {userData?.name}, Welcome to our website!
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
        <Grid item marginLeft={"1rem"}>
          <LogoutButton
            onClick={handleLogout}
            variant="contained"
            color="error"
          >
            log out
          </LogoutButton>
        </Grid>
      </Grid>
    </WelcomeContainer>
  );
};

export default Home;
