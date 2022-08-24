import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {

  return (
    <nav
      className=
        "navbar navbar-expand-lg navbar-light bg-light navbar-custome"
    >
      <div className="container justify-content-around">
        <Link to="/" className="navbar-brand mb-0 mr-0 h1">
          Adventure
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/category/sneakers" className="nav-link">
                Sneakers<span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/backpacks" className="nav-link">
                Backpacks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/accesories" className="nav-link">
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-text">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
