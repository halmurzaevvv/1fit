import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgotPasswordComplete from "./components/Auth/ForgotPasswordComplete";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AddProduct from "./components/Studios/AddProduct";
import Edit from "./components/Studios/Edit";
import StudioList from "./components/Studios/StudioList";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Partners from "./pages/Partners";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<StudioList />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPasswordComplete" element={<ForgotPasswordComplete />} />
      <Route path="/admin" element={<AddProduct />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default MainRoutes;
