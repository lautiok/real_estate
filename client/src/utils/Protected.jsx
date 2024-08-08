import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { Isloading } from "../components/Isloading/IsLoading";

export const Protected = () => {
  const { isAuth, loading } = useAuth();

  if (loading) return <div className="loading"> <Isloading  /></div>;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
