import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderConteiner } from "../components/Header/HeaderConteiner";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <HeaderConteiner />
      <Outlet />
      <Footer />
    </>
  );
};