import { styled } from "@mui/system";
import { Container, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import SignUpForm from "../components/SignUpForm";

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

const SignUp = () => {
  return (
    <ContainerWrapper component="main" maxWidth="xs">
      <div>
        <AvatarWrapper>
          <LockOutlinedIcon />
        </AvatarWrapper>
        <TitleWrapper component="h1" variant="h5">
          Register
        </TitleWrapper>
        <SignUpForm />
      </div>
    </ContainerWrapper>
  );
};

export default SignUp;
