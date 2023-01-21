import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Map from "./components/Map/Map";
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
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export default MainRoutes;
