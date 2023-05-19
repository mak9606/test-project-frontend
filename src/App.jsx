import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ROUTES from "./settings/Routes";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./pages/Loading";
import { useAuth } from "./context/auth.context";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
      {isLoggedIn ? (
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOADING} element={<Loading />} />
        </Routes>
      ) : (
        <Routes>
          {" "}
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.LOADING} element={<Loading />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
