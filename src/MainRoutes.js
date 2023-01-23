import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgotPasswordComplete from "./components/Auth/ForgotPasswordComplete";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Studios from "./pages/Studios";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/studios" element={<Studios />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPasswordComplete" element={<ForgotPasswordComplete />} />
    </Routes>
  );
};

export default MainRoutes;
