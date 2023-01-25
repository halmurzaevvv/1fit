import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgotPasswordComplete from "./components/Auth/ForgotPasswordComplete";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AddProduct from "./components/Studios/AddProduct";
import Edit from "./components/Studios/Edit";
import StudioList from "./components/Studios/StudioList";
import Map from "./components/Map/Map";
import OrderForm from "./components/OrderForm/OrderForm";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Abonement365 from "./components/Abonements/Abonement365";
import Abonement180 from "./components/Abonements/Abonement180";
import Abonement90 from "./components/Abonements/Abonement90";
import Abonement730 from "./components/Abonements/Abonement730";
import Favorites from "./components/Favorites/Favorites";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/studios" element={<StudioList />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPasswordComplete" element={<ForgotPasswordComplete />} />
      <Route path="/admin" element={<AddProduct />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/abonement365" element={<Abonement365 />} />
      <Route path="/abonement90" element={<Abonement90 />} />
      <Route path="/abonement180" element={<Abonement180 />} />
      <Route path="/abonement730" element={<Abonement730 />} />
      <Route path="/favorite" element={<Favorites />} />
    </Routes>
  );
};

export default MainRoutes;
