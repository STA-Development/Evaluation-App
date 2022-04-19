import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import PassRecoverSent from "../pages/auth/PassRecoverSent";
import PassRecover from "../pages/auth/PassRecover";
import PassRecoverNewPas from "../pages/auth/PassRecoverNewPas";
import IndexAuth from "../pages/auth/IndexAuth";
import SignUp from "../pages/auth/SignUp";
import PassChanged from "../pages/auth/PassChanged";

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexAuth />}>
      <Route index element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="password-recover-email" element={<PassRecover />} />
      <Route path="password-recover-resend" element={<PassRecoverSent />} />
      <Route path="new-password" element={<PassRecoverNewPas />} />
      <Route path="password-changed" element={<PassChanged />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
