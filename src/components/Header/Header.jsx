import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Header.css";

function Header() {
  return (
    // Returning different components using Link
    <header className="header">
      <div className="left-head">
        <div className="main-logo">
          <AiTwotoneHome id="home-logo" />
          Estatory
        </div>
        <div className="links">
          <Link to="/" className="link">
            Rent
          </Link>

          <Link to="/buy" className="link">
            Buy
          </Link>

          <Link to="/sell" className="link">
            Sell
          </Link>

          <Link to="/Favourites" className="link" id="favourites">
            Favourites
          </Link>
        </div>
        <div className="dropdown">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Manage Property"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Resources"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <div className="right-head">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </header>
  );
}
export default Header;
