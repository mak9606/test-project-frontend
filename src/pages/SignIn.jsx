import { styled } from "@mui/system";
import { Container, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import SignInForm from "../components/SignInForm";

const ContainerWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const TitleWrapper = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const SignIn = () => {
  return (
    <ContainerWrapper component="main" maxWidth="xs">
      <div>
        <AvatarWrapper>
          <LockOutlinedIcon />
        </AvatarWrapper>
        <TitleWrapper component="h1" variant="h5">
          Sign In
        </TitleWrapper>
        <SignInForm />
      </div>
    </ContainerWrapper>
  );
};

export default SignIn;
