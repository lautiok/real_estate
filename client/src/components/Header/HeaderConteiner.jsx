import React from "react";
import "./HeaderContainer.css";
import { Link } from "react-router-dom";
import { NavResponsive } from "../HeaderResp/NavResponsive";
import { useAuth } from "../../hooks/useAuth";

export const HeaderConteiner = () => {
  const { logout, isAuth } = useAuth();
  return (
    <header>
      <section className="logo-header">
        <h1>
          {" "}
          <Link to="/">RentSale</Link>{" "}
        </h1>
      </section>
      <NavResponsive />
      <nav className="nav-header">
        <ul>
          <li>
            <Link to="/buys">Buys</Link>
          </li>
          <li>
            <Link to="/rent">Rent</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section className="singin-up">
        <ul>
          {isAuth ? (
            <li>
              <Link className="singin" to="/dashboard"> Dashboard </Link>
            </li>
          ) : (
            <li>
              <Link className="singin" to="/login">Sign in</Link>
            </li>
          )}
        </ul>
      </section>
    </header>
  );
};
