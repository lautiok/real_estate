import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavResp.css";
export const NavResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(false);
  }, [location]);

  return (
    <div className="nav-container-responsive">
      <button className="toggle-btn" onClick={toggleNav}>
        {" "}
        ☰{" "}
      </button>
      <div className={`nav-r ${showNav ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleNav}>
          X
        </button>
        <nav className="nav-responsive">
          <ul className="nav-ul">
            <li className="link-resp">
              <Link to="/buys">Buys</Link>
            </li>
            <li className="link-resp">
              <Link to="/rent">Rent</Link>
            </li>
            <li className="link-resp">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="link-resp">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
