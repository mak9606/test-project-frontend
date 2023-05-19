import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import ROUTES from "../settings/Routes";
import { useAuth } from "../context/auth.context";

const Loading = () => {
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    } else {
      navigate(ROUTES.SIGNIN);
    }
  }, []);
  if (loading) return <div>Loading</div>;
  else if (isLoggedIn && !loading) return <Navigate to={ROUTES.HOME} />;
  else if (isLoggedIn && !loading) return <Navigate to={ROUTES.SIGNIN} />;
};

export default Loading;
